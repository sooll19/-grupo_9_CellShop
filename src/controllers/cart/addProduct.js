const db = require("../../database/models");
const { sendResponse } = require("../../utils/sendResponse");

module.exports = async (req, res) => {
  try {
    const { productId, userId, quantity } = req.body;
    const {price,discount} = await db.Product.findByPk(productId)
    const [order, __] = await db.Order.findOrCreate({
      where: { userId: req.session.userLogin?.id || userId, status: "pending" },
      defaults: {
        userId: req.session.userLogin?.id || userId,
      }
    });
    const [_, isCCreate] = await db.Cart.findOrCreate({
      where: { productId, orderId: order.id },
      defaults: { productId, orderId: order.id, quantity },
    });

    //hacer el update del quatity del producto

    if(isCCreate) {
      order.total += discount ? price - (price * discount / 100) : price //ojo!! agregar a la ecuación el quantity!!
      await order.save()
    }

    
    
    return sendResponse(
      res,
      "success",
      {
        message: isCCreate
          ? "Producto agregado con éxito"
          : "El producto no puede agregarse dos veces",
      },
      isCCreate ? 202 : 200
    );
  } catch ({ message }) {
    sendResponse(res, "error", { message }, 500);
  }
};


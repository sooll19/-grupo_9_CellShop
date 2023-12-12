const db = require("../../database/models");
const { sendResponse } = require("../../utils/sendResponse");

module.exports = async (req, res) => {
  try {
    const { productId, userId } = req.body;
    const order = await db.Order.findOne({
      where: { userId: req.session.userLogin?.id || userId, status: "pending" },
    });

    const isDelete = await db.Cart.destroy({
      where: { orderId: order.id, productId },
    });

    return sendResponse(
      res,
      "success",
      {
        message: isDelete
          ? "Producto eliminado con éxito"
          : "El producto que quieres eliminar no existe",
      },
      isDelete ? 200 : 400
    );
  } catch ({ message }) {
    sendResponse(res, "error", { message }, 500);
  }
};

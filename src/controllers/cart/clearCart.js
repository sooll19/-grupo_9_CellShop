const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const { userId } = req.body;

    const order = await db.Order.findOne({
      where: { userId: req.session.userLogin?.id || userId, status: "pending" },
    });

    const isDelete = await db.Cart.destroy({
      where: { orderId: order.id },
    });

    if(isDelete) {
      order.total = 0
      await order.save()
    }

    res.status(isDelete ? 200 : 400).json({
      ok:true,
      message:"Producto eliminado con éxito"
    })

  } catch (error) {
    res.status(500).json({
      ok:false,
      message:error?.message
    })
  }
};
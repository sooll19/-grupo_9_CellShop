const db = require("../../database/models");
module.exports = async (req, res) => {
  try {
    const { userId } = req.body;
    const [order, isCreated] = await db.Order.findOrCreate({
      where: {
        userId: req.session.userLogin?.id || userId,
        status: "pending",
      },
      include: ["products"],
      defaults: { userId: req.session.userLogin?.id || userId },
    });

    res.status(isCreated ? 201 : 200).json({
      ok: true,
      message: "Carrito obtenido",
      data: order.products,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error?.message,
    });
  }
};

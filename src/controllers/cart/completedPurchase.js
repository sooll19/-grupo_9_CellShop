const db = require("../../database/models");
const { sendResponse } = require("../../utils/sendResponse");

module.exports = async (req, res) => {
  try {
    const { userId } = req.body;

    // Paso 1: Encontrar la orden pendiente del usuario
    const order = await db.Order.findOne({
      where: { userId: req.session.userLogin?.id || userId, status: "pending" },
    });

    if (!order) {
      return sendResponse(res, "error", { message: "No hay orden pendiente para finalizar" }, 404);
    }

    // Paso 2: Obtener todos los productos en el carrito para esa orden
    const cartItems = await db.Cart.findAll({
      where: { orderId: order.id },
      include: [{ model: db.Product }],
    });

    if (cartItems.length === 0) {
      return sendResponse(res, "error", { message: "El carrito está vacío" }, 400);
    }

    // Paso 3: Calcular el total de la compra
    let totalAmount = 0;
    for (const cartItem of cartItems) {
      const { price, discount } = cartItem.Product;
      totalAmount += discount ? price - (price * discount / 100) : price;
    }

    // Paso 4: Actualizar el estado de la orden y limpiar el carrito
    order.status = "completed";
    order.total = totalAmount;
    await order.save();

    // Eliminar todos los productos del carrito después de finalizar la compra
    await db.Cart.destroy({ where: { orderId: order.id } });

    return sendResponse(res, "success", { message: "Compra finalizada con éxito", order }, 200);
  } catch (error) {
    sendResponse(res, "error", { message: error.message }, 500);
  }
};

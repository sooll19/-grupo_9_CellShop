const db = require("../../database/models");
const { sendResponse } = require("../../utils/sendResponse");

module.exports = async (req, res) => {
  try {
    const { userId, totalOrder } = req.body;
    const isUpdate = await db.Order.update(
      { total: totalOrder },
      {
        where: {
          userId: req.session.userLogin?.id || userId,
          status: "pending",
        },
      }
    );

    return sendResponse(
      res,
      "success",
      {
        message: isUpdate
          ? "El total de la orden fue actualizado con éxito"
          : "Error al actualizar el total de la orden",
      },
      isUpdate ? 200 : 400
    );
  } catch ({message}) {
    sendResponse(res, "error", { message }, 500);
  }
};

const sendResponse = (res, type, data = {}, code = 0) => {
  let status = code || type === "error" ? 400 : 200;
  let ok = type !== "error";
  res.status(status).json({
    ok,
    ...data,
  });
};

module.exports = { sendResponse };

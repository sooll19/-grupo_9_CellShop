const express = require("express");
const router = express.Router();
const {
  register,
  processRegister,
  login,
  profile,
} = require("../controllers/usersController");
const registerValidator = require("../validations/registerValidator");

/* /users */
router.get("/register", register);
router.post("/register", registerValidator, processRegister);
router.get("/login", login);
router.get("/profile", profile);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  register,
  processRegister,
  login,
  profile,
} = require("../controllers/usersController");
const registerValidator = require("../validations/registerValidator");
const uploadUser = require('../middlewares/uploadUser')

/* /users */
router.get("/register", register);
router.post("/register", uploadUser.single('image'), registerValidator, processRegister);
router.get("/login", login);
router.get("/profile", profile);

module.exports = router;

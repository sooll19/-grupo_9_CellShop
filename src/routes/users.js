const express = require("express");
const router = express.Router();
const { register, processRegister, login, processLogin, profile, updateProfile, logout } = require("../controllers/usersController");
const registerValidator = require("../validations/registerValidator");
const loginValidator = require("../validations/loginValidator");
const checkUserLogin = require('../middlewares/checkUserLogin');
const uploadUser = require('../middlewares/uploadUser');

/* /users */
router.get("/register", register);
router.post("/register", uploadUser.single('image'), registerValidator, processRegister);
router.get("/login", login);
router.post("/login", loginValidator, processLogin);
router.get("/profile", checkUserLogin, profile);
router.put("/update-profile",updateProfile);
router.get("/logout",logout);
module.exports = router;
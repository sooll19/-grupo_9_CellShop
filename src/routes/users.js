const express = require("express");
const router = express.Router();
const { register, processRegister, login, profile } = require("../controllers/usersController");

/* /users */
router.get("/register", register)
router.get("/login", login)
router.get('/profile', profile)
router.post("/register", processRegister)

module.exports = router;
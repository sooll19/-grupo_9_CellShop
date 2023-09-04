const express = require("express");
const router = express.Router();
const {
  register,
  processRegister,
  login,
} = require("../controllers/usersController");





/* /users */
router.get("/register", register)
 router.get("/login", login)
 router.post("/register" ,processRegister)


module.exports = router;

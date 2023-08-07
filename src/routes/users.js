const express = require('express');
const { register, login } = require('../controllers/usersController');
const router = express.Router();

/* /users */
router.get('/register', register);
router.get('/login' , login)
module.exports = router;

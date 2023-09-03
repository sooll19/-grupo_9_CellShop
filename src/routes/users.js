const express = require('express');
const { register, login, profile } = require('../controllers/usersController');
const router = express.Router();

/* /users */
router.get('/register', register);
router.get('/login' , login)
router.get('/profile', profile)

module.exports = router;
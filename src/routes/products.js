const express = require('express');
const { detalle , cart } = require ('../controllers/productsController')
const router = express.Router();

/* /users */
router.get('/detalle', detalle);
router.get('/cart' , cart)
module.exports = router;

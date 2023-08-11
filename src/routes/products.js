const express = require('express');
const { detalle , cart, edit, create } = require ('../controllers/productsController')
const router = express.Router();

/* /users */
router.get('/detalle', detalle);
router.get('/cart' , cart);
router.get('/edit' , edit);
router.get('/create' , create)
module.exports = router;

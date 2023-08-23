const express = require('express');
const { cart, edit, create, celulares, accesoriosParaCelu, detalle } = require ('../controllers/productsController')
const router = express.Router();

/* /product */
router.get('/celulares', celulares);
router.get('/accesoriosParaCelu', accesoriosParaCelu);
router.get('/detalle/:id', detalle)
router.get('/cart' , cart);
router.get('/edit' , edit);
router.get('/create' , create)
module.exports = router;

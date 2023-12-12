const express = require('express');
const {
    getCart,
    clearCart,
    addProduct,
    removeProduct,
    updateTotal,
  } = require("../controllers/apiCartController");
const router = express.Router();


/* /cart */
router
.post('/',addProduct) //agrego un producto
.delete('/clear',clearCart) // Eliminamos todos los productos de la orden
.get('/', getCart) // Obtengo los productos de la orden
.delete('/:id',removeProduct) //elimino un producto
.patch("/total", updateTotal);//el total de la compra
                              //completa la compra

module.exports = router;
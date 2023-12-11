const express = require('express');
const { showAll, addItem, removeItem, emptyCart } = require('../controllers/apiCartController');
const router = express.Router();


/* /cart */
router
.get('/',showAll) //envio todo
.post('/add',addItem) //agrego producto
.delete('/:id',removeItem) //elimino un producto
.delete('/all',emptyCart) //vacio el carrito

module.exports = router;
const express = require('express');
const { detalle , cart, edit, create,celulares, accesoriosParaCelu,update, add, remove } = require ('../controllers/productsController')
const upload = require('../middlewares/upload');
const router = express.Router();

/* /products */
router.get('/celulares', celulares);
router.get('/accesoriosParaCelu', accesoriosParaCelu);
router.get('/detalle/:id', detalle);
router.get('/cart' , cart);
router.get('/edit/:id' , edit);
router.put('/update/:id', upload.single('imagen'), update)
router.get('/add' , add);
router.post('/add', upload.single('imagen'), create); //create crea los cambios luego de agregar el producto
router.delete('/delete/:id',remove); 


module.exports = router;
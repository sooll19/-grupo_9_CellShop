const express = require('express');
const { detalle , cart, edit, add, create,remove, update} = require ('../controllers/productsController')
const router = express.Router();

/* /products */
router.get('/detalle/:id', detalle);
router.get('/cart' , cart);
router.get('/edit/:id' , edit);
router.put('/update/:id',update); //actualiza luego de editar el producto
router.get('/add' , add);
router.post('/add',create); //crea los cambios luego de agregar el producto
/* router.post('/add', upload.single('image'), create) */
router.delete('/remove/:id',remove);


module.exports = router;
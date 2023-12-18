const express = require('express');
const { checkEmail, getAllProduct, getAllSections, getAllBrands, getAllCategories, createProduct, updateProduct, deleteProduct } = require('../controllers/apiController');
const router = express.Router();
const { list, show, create, update, destroy } = require('../controllers/adminController');
const upload = require('../middlewares/upload');

/* /apis */
router.get('/check-email', checkEmail);
router.get('/products', getAllProduct);
router.post('/products', upload.any(), createProduct)
router.put('/products/:id', upload.any(), updateProduct)
router.delete('/products/:id', deleteProduct)
router.get('/sections', getAllSections)
router.get('/brands', getAllBrands)
router.get('/categories', getAllCategories)

/* apis/products */
router.get('/', list);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy)

module.exports = router;
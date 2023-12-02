const express = require('express');
const { checkEmail } = require('../controllers/apiController');
const router = express.Router();
const { list, show, create, update, destroy } = require('../controllers/adminController');

/* /apis */
router.get('/check-email', checkEmail);

/* apis/products */ 
router.get('/', list);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy)

module.exports = router;
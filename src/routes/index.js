var express = require('express');
const { index,admin , search } = require('../controllers/indexController')
var router = express.Router();

/* GET home page. */
router.get('/', index )
router.get('/search', search);
router.get('/admin',admin);
module.exports = router;


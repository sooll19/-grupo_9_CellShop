var express = require('express');
var router = express.Router();

const { index, admin, search } = require('../controllers/indexController')
const checkAdmin = require('../middlewares/checkAdmin')

/* GET home page. */
router.get('/', index)
router.get('/search', search);
router.get('/admin', checkAdmin, admin);

module.exports = router;
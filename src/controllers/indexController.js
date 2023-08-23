const {readJSON} = require('../data')

module.exports = {
    index : (req,res) => {

        const products = readJSON('products.json');
            return res.render('index',{
                accesorios: products.filter(product => product.categoria === "accesorios"),
                 oferta : products.filter(product => product.subcategoria === "oferta"),
                 products
        })
    },
}
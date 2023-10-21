const { readJSON } = require("../../data");

module.exports = (req, res) => {
    const products = readJSON('products.json');
    return res.render('accesorios', {
        accesorios: products.filter(product => product.categoria === "accesorios")
    });
}
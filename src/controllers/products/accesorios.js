const { readJSON } = require("../../data");

module.exports = (req, res) => {
    const products = readJSON('products.json');
    return res.render('accesoriosParaCelu', {
        accesoriosParaCelu: products.filter(product => product.categoria === "accesorios")
    });
}
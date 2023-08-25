/* const { readJSON, writeJSON } = require("../../data");
const Product = require("../../data/Product");

module.exports = (req, res) => {

    const products = readJSON('products.json')

    let nuevoProducto = new Product(req.body) // Se trae la función constructora con el destructuring del body
    products.push(nuevoProducto);

    writeJSON(products, 'products.json')

    return res.redirect('/admin') // Sirve para el envio de informacion por POST
} */
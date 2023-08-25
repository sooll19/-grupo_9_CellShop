/* const { readJSON, writeJSON } = require("../../data");
const Product = require("../../data/Product");

module.exports = (req, res) => {

    const products = readJSON('products.json')

    const data = {
        ...req.body,
        imagen: req.file ? req.file.filename : null 
    }

    let nuevoProducto = new Product(data) // Se trae la función constructora con el destructuring del body
    products.push(nuevoProducto);

    writeJSON(products, 'products.json')

    return res.redirect('/admin') // Sirve para el envio de informacion por POST
} */
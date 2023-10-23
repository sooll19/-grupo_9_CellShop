//const { readJSON, writeJSON } = require("../../data");
const {validationResult} = require('express-validator');
const db = require ('../../database/models')

module.exports = (req, res) => {

    const errors = validationResult(req);
    if (errors.isEmpty()){
        const {name,price,discount,description,brandId,sectionId} =req.body
    }

    const data = {
        ...req.body,
        imagen: req.file ? req.file.filename : null 
    }

    let nuevoProducto = new Product(data) // Se trae la función constructora con el destructuring del body
    products.push(nuevoProducto);

    writeJSON(products, 'products.json')

    return res.redirect('/admin') 
}
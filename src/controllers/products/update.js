const { unlinkSync, existsSync } = require("fs");
const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {

    const products = readJSON('products.json');
    const id = req.params.id;
    const {marca, modelo, color, anio, descripcion, descuento, precio, stock, cantidad, especificacionesTecnicas, categoria, subcategoria} = req.body;

    const productoModificado = products.map(product => {

        if (product.id == +id) {

            req.file && (existsSync(`/public/images/${product.imagen}`) && unlinkSync(`/public/images/${product.imagen}`)) //cambia la imagen que habia por la nueva y borra la anterior de los archivos

            product.marca = marca
            product.modelo = modelo.trim()
            product.color = color.trim()
            product.anio = +anio;
            product.descripcion = descripcion.trim(),
            product.descuento = +descuento;
            product.precio = +precio;
            product.stock = stock;
            product.cantidad = cantidad;
            product.imagen = req.file ? req.file.filename : product.imagen // guarda la imagen que viene nueva o deja la que habia
            product.especificacionesTecnicas = especificacionesTecnicas;
            product.categoria = categoria;
            product.subcategoria = subcategoria;
            product.ingreso = new Date ()

        }

        return product
    })

    writeJSON(productoModificado, 'products.json')

    return res.redirect('/admin')
}
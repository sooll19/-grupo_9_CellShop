const { readJSON } = require('../data');
const products = readJSON('products.json')

const Product = function ({ marca, modelo, color, anio, descripcion, descuento, precio, stock, cantidad, imagen, imagenSecundaria, especificacionesTecnicas, categoria, subCategoria }) {
    

    this.id = products[products.length - 1].id + 1; // trae el id del ultimo elemento 
    this.marca = marca; //no se usa trim() porque es un select, ya es parte del codigo
    this.modelo = modelo.trim();
    this.color = color.trim();
    this.anio = +anio; // se parsea porque llega en string y lo tenemos en formato number
    this.descripcion = descripcion.trim();
    this.descuento = +descuento;
    this.precio = +precio;
    this.stock = stock;
    this.cantidad = +cantidad;
    this.imagen = imagen;
    this.imagenSecundaria = imagenSecundaria;
    this.especificacionesTecnicas = especificacionesTecnicas;
    this.categoria = categoria;
    this.subCategoria = subCategoria;
    this.ingreso = new Date()
}

module.exports = Product;
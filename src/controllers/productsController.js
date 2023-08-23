const { readJSON, writeJSON } = require('../data');
const Product = require('../data/Product');

module.exports = {

  detalle: (req, res) => {
    const products = readJSON('products.json')

    const id = req.params.id;    
    const product = products.find(product => product.id === +id);

    return res.render('detalle', {
      product
    });

  },

  cart: (req, res) => {
    return res.render('cart');
  },

  edit: (req, res) => {
    const products = readJSON('products.json')
    const marcas = readJSON('marcas.json')

    const id = req.params.id;    
    const product = products.find(product => product.id === +id);

    return res.render('productEdit',{
      ...product,
      marcas: marcas.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      ),
    })
  },

  add: (req, res) => {

    const marcas = readJSON('marcas.json')

    return res.render('productAdd', {
      marcas: marcas.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      ),
    })

  },

  create: (req, res) => {

    const products = readJSON('products.json')

    let nuevoProducto = new Product(req.body) // Se trae la función constructora con el destructuring del body
    products.push(nuevoProducto);

    writeJSON(products, 'products.json')

    return res.redirect('/admin') // Sirve para el envio de informacion por POST
  },

  update: (req,res) => {
    return res.send(req.body)
  }

}
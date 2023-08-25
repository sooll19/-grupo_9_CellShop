const { readJSON, writeJSON } = require('../data');
const Product = require('../data/Product');

module.exports = {
  celulares: (req, res) => {
    const products = readJSON('products.json');
    return res.render('celulares',{
     celulares : products.filter(product => product.categoria === "celular")
    });
  },
  accesoriosParaCelu: (req, res) => {
    const products = readJSON('products.json');
    return res.render('accesoriosParaCelu',{
      accesoriosParaCelu : products.filter(product => product.categoria === "accesorios")
    });
  },
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

    const data = {
        ...req.body,
        imagen: req.file ? req.file.filename : null 
    }

    let nuevoProducto = new Product(data) // Se trae la función constructora con el destructuring del body
    products.push(nuevoProducto);

    writeJSON(products, 'products.json')

    return res.redirect('/admin') 
},

  update: (req,res) => {
    return res.send(req.body)
  },
  remove:  (req, res) => {
    const products = readJSON('products.json');
    const id = req.params.id;

    const productsModify = products.filter(product => product.id !== +id);

    writeJSON(productsModify, 'products.json')

    return res.redirect('/admin')
} 
}
const {readJSON} = require('../data')
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
  detalle: (req,res) => {
    const products = readJSON("products.json");

    const id = req.params.id;
    const product = products.find((product) => product.id === id);

    return res.render("detalle", {
      product,
  })
},
  cart: (req, res) => {
    return res.render('cart');
  },
  edit: (req, res) => {
    return res.render('productEdit')
  },
  create: (req, res) => {
    return res.render('productCreate')
  },

}
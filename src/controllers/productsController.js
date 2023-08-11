module.exports = {

  detalle: (req, res) => {
    return res.render('detalle');
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
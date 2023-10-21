const db = require('../../database/models')

module.exports = (req, res) => {
  const products = db.Product.findAll({
    include: ['brand', 'section', 'images'],
    where: {
      brandId: req.query.brand
    }
  });
  const brands = db.Brand.findAll({
    order: ['name']
  })

  Promise.all([products, brands])
    .then(([products, brands]) => {
      return res.render('admin', {
        products,
        brands,
        brand: req.query.brand
      })
    })
    .catch(error => console.log(error))
}
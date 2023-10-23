const db = require('../../database/models');

module.exports = (req, res) => {

  const selectedBrand = req.query.brand;

  const brandFilter = selectedBrand === '-1' ? {} : { brandId: selectedBrand };

  const productsPromise = db.Product.findAll({
    include: ['brand', 'section', 'images'],
    where: brandFilter
  });

  const brandsPromise = db.Brand.findAll({
    order: ['name']
  });

  Promise.all([productsPromise, brandsPromise])
    .then(([products, brands]) => {
      return res.render('admin', {
        products,
        brands,
        brand: selectedBrand
      });
    })
    .catch(error => console.log(error));
};

const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const product = await db.Product.findByPk(req.params.id, {
      include: ['images']
    });
    const brands = await db.Brand.findAll({
      order: ['name']
    })
    const sections = await db.Section.findAll({
      order: ['name']
    });
    const categories = await db.Category.findAll({
      order: ['name']
    });  
    return res.render("productEdit", {
      product,
      brands,
      sections,
      categories,
    });

  } catch (error) {
    console.log(error)
  }


  /* const product = db.Product.findByPk(req.params.id, {
    include: ['images']
  });
  const brands = db.Brand.findAll({
    order: ['name']
  })
  const sections = db.Section.findAll({
    order: ['name']
  });

  Promise.all([product, brands, sections])
    .then(([product, brands, sections]) => {
      return res.render("productEdit", {
        ...product,
        brands,
        sections
      });
    })
    .catch(error => console.log(error)) */

}

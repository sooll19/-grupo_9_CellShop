const db = require('../../database/models')

module.exports = (req, res) => {

  const brands = db.Brand.findAll({
    order : ['name']
 })

 const categories = db.Category.findAll({
  order: ['name']
 })

 const sections = db.Section.findAll({
  order : ['name']
 })

 Promise.all([brands,categories])
  .then(([brands,categories,sections]) => {
    return res.render('productAdd', {
      marcas: brands,
      categories,
      sections
     })
    })
    .catch(error => console.log(error))
  }
const db = require("../../database/models");

module.exports = (req, res) => {
  db.Product.findByPk(req.params.id, {
    include: ['images', 'brand']
  })
    .then(product => {
      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }

      product.technicalSpecifications = JSON.parse(product.technicalSpecifications);
      return res.render("detalle", {
        product,
      });
    })
    .catch(error => console.log(error));
}

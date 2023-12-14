const db = require("../../database/models");
const { Op } = require("sequelize");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 





module.exports = (req, res) => {
  db.Product.findByPk(req.params.id, {
    include: ['images', 'brand']
  })
    .then(product => {
      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }

      product.technicalSpecifications = JSON.parse(product.technicalSpecifications);

      db.Product.findAll({
        where: {
          [Op.or]: {
            brandId: product.brandId,
            sectionId: product.sectionId
          }
        }
      })
        .then(products => {
          return res.render("detalle", {
            product,
            products,
            toThousand
          });
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
};


/*base de datos*/
const db = require("../database/models");
const { readJSON } = require("../data");
const fs = require("fs");

module.exports = {
  index: async (req, res) => {
    try {
      // const products = readJSON("products.json");

      const products = await db.Product.findAll();

      const ultimosProductos = products
        .sort((a, b) => b.createdAt - a.createdAt)
        .filter((_, index) => index <= 4);

      const accesorios = products.filter(({ categoryId }) => categoryId === 2);
      const oferta = products.filter(({ sectionId }) => sectionId === 1);

      return res.render("index", {
        accesorios,
        oferta,
        products: ultimosProductos,
      });
    } catch (error) {
      console.log(error);
    }
  },

  search: (req, res) => {
    const products = readJSON("products.json");
    const keywords = req.query.keywords;
    const results = products.filter((product) =>
      product.modelo.toLowerCase().includes(keywords.toLowerCase())
    );

    return res.render("results", {
      results,
      keywords,
    });
  },

  admin: (req, res) => {
    const products = db.Product.findAll({
      include: ["brand", "section", "images"],
    });
    const brands = db.Brand.findAll({
      order: ["name"],
    });

    Promise.all([products, brands])
      .then(([products, brands]) => {
        return res.render("admin", {
          products,
          brands,
        });
      })
      .catch((error) => console.log(error));
  },
};

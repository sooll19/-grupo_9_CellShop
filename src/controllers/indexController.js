const { readJSON } = require("../data");
const fs = require("fs");

module.exports = {
<<<<<<< HEAD
    index : (req, res) => {
      return  res.render('index');
      },
      admin: (req, res) => {

        const products = readJSON('products.json');
    
        return res.render('admin', {
          products,
        })
    
      }  
}
=======
  index: (req, res) => {
    const products = readJSON("products.json");
    return res.render("index", {
      accesorios: products.filter(
        (product) => product.categoria === "accesorios"
      ),
      oferta: products.filter((product) => product.subcategoria === "oferta"),
      products,
    });
  },
  search: (req, res) => {
    const products = readJSON("products.json");
    const keywords = req.query.keywords;
    const results = products.filter((product) =>
      product.modelo.toLowerCase().includes(keywords.toLowerCase())
    );
    return res.render('results',{
       results,
       keywords 
    });
  },
};
>>>>>>> develop

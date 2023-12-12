const db = require('../../database/models')

module.exports = async (req,res) => {
  try {
    const product = await db.Product.findByPk(req.params.id,)

      return res.render("cart", {
        product
      });
    
  } catch (error) {
    console.log(error);
  }
}
const { readJSON } = require("../../data");

module.exports = (req, res) => {

    const marcas = readJSON('marcas.json')

    return res.render('productAdd', {
      marcas: marcas.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      ),
    })

  }
const db = require('../../database/models')

module.exports = (req, res) => {
    const celulares = db.Product.findAll({
        where: {
            categoryId: 1
        }
    });

    Promise.all([celulares])
        .then(([celulares]) => {
            return res.render('celulares', {
                celulares
            })
        })
        .catch(error => console.log(error))
}

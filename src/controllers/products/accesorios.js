const db = require('../../database/models')

module.exports = (req, res) => {
    const accesorios = db.Product.findAll({
        where: {
            categoryId: 2
        },
        include: ['brand']
    });

    Promise.all([accesorios])
        .then(([accesorios]) => {
            return res.render('accesorios', {
                accesorios
            })
        })
        .catch(error => console.log(error))
}

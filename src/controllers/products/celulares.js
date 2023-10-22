const db = require('../../database/models')

module.exports = async (req, res) => {
    try {
        const celulares = await db.Product.findAll({
            where: {
                categoryId: 1
            },
            include: ['brand']
        });

        return res.render('celulares', {
            celulares
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
}

const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const celulares = await db.Product.findAll({
            where: {
                categoryId: 1
            },
            include: ['brand']
        });

        // Separa productos con y sin ofertas
        const productosConOferta = celulares.filter(producto => producto.discount > 0);
        const productosSinOferta = celulares.filter(producto => producto.discount === 0);

        // Acomoda para que aparezcan los celulares con oferta al final de la vista
        const celularesOrdenados = [...productosSinOferta, ...productosConOferta];

        res.render('celulares', {
            celulares: celularesOrdenados
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
};

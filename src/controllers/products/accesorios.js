const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const accesorios = await db.Product.findAll({
            where: {
                categoryId: 2
            },
            include: ['brand']
        });

        // Separa productos con y sin ofertas
        const productosConOferta = accesorios.filter(producto => producto.discount > 0);
        const productosSinOferta = accesorios.filter(producto => producto.discount === 0);

        //Ordena productos con oferta al final
        const accesoriosOrdenados = [...productosSinOferta, ...productosConOferta];

        res.render('accesorios', {
            accesorios: accesoriosOrdenados
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
};

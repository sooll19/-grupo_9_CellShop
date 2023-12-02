const paginate = require('express-paginate')
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../services/admin.services")

module.exports = {
    list: async () => {
        try {

            const {count: total, rows: products} = await getAllProducts(req.query.limit, req.skip)
            const pagesCount = Math.ceil(total / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(
              pagesCount,
              pagesCount,
              currentPage
            );
            return res.status(200).json({
                ok: true,
                meta : {
                    total,
                    pagesCount,
                    currentPage,
                    pages
                },
                data : products
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss.. Hubo un error :('
            })
        }
    },
    show: async (req, res) => {
        try {

            const product = await getProductById(req.params.id)

            return res.status(200).json({
                ok: true,
                data: product
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss.. Hubo un error :('
            })
        }
    },
    create: async (req, res) => {
        try {

            const newProduct = await createProduct(req.body)

            return res.status(200).json({
                ok: true,
                data: newProduct,
                msg: 'Producto creado con éxito'
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss.. Hubo un error :('
            })
        }
    },
    update: async (req, res) => {
        try {

            const productUpdated = await updateProduct(req.params.id, req.body)

            return res.status(200).json({
                ok: true,
                data: productUpdated,
                msg: 'Producto actualizado con éxito'
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss.. Hubo un error :('
            })
        }
    },
    destroy: async (req, res) => {
        try {

            await deleteProduct(req.params.id, req.body)

            return res.status(200).json({
                ok: true,
                msg: 'Producto eliminado con éxito'
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss.. Hubo un error :('
            })
        }
    }
}
const db = require('../database/models')

const getAllProducts = async (limit, offset) => {
    try {

        const { rows, count } = await db.Product.findAndCountAll({
            limit,
            offset,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        return {
            count,
            rows
        }

    } catch (error) {
        throw {
            status: error.status || 500,
            message: error.message || 'Upss, hubo un error :('
        }
    }
}

const getProductById = async (id) => {
    try {

        const product = await db.Product.findByPk(id, {
            attributes: {
                exclude: ['categoryId', 'brandId', 'sectionId', 'createdAt', 'updatedAt']
            },
            include: [{
                association: 'category',
                attributes: ['name']
            },
            {
                association: 'section',
                attributes: ['name']
            },
            {
                association: 'brand',
                attributes: ['name']
            }
            ]
        })

        return product

    } catch (error) {

        throw {
            status: error.status || 500,
            message: error.message || 'Upss, hubo un error :('
        }
    }
}

const createProduct = async (data) => {
    try {
        const newProduct = await db.Product.create(data);

        return newProduct;

    } catch (error) {
        throw {
            status: error.status || 500,
            message: error.message || 'Upss, hubo un error :('
        }
    }
};

const updateProduct = async (id, data) => {
    try {
        const updatedProduct = await db.Product.update(data, {
            where: {
                id: id
            },
        });

        return updatedProduct[0];

    } catch (error) {
        throw {
            status: error.status || 500,
            message: error.message || 'Upss, hubo un error al actualizar el producto :('
        };
    }
};

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await db.Product.destroy({
            where: {
                id: id
            },
        });

        return deletedProduct

    } catch (error) {
        throw {
            status: error.status || 500,
            message: error.message || 'Upss, hubo un error al eliminar el producto :('
        };
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
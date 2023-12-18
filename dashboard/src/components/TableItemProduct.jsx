import PropTypes from 'prop-types'

export const TableItemProduct = ({ product: { id, brand, model, price, discount }, handleEditProduct, handleDeleteProduct }) => {
    return (
        <tr>
            <td>{brand?.name}</td>
            <td>{model}</td>
            <td>{price}</td>
            <td>{discount}</td>
            <td>{price - (discount * price / 100)}</td>

            <td>
                <div className="d-flex justify-content-around">
                    <button className="btn btn-sm btn-primary mx-1">
                        <i className="fas fa-eye"></i>
                    </button>
                    <button className="btn btn-sm btn-success mx-1" onClick={() => handleEditProduct(id)}>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button className="btn btn-sm btn-danger mx-1" onClick={() => handleDeleteProduct(id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

TableItemProduct.propTypes = {
    product: PropTypes.object,
    handleEditProduct: PropTypes.func,
    handleDeleteProduct: PropTypes.func
}
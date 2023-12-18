
export const LastProductInDb = () => {
  return (

    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <h3 className="m-0 font-weight-bold text-gray-800">Motorola Razr 40 Ultra</h3>
            <p style={{ fontSize: '25px' }}>$599.999</p>
            <img
              className="img-fluid px-3 px-sm-4"
              width="300px;"
              src="/public/razrUltra.png"
              alt="Motorola Razr Ultra"
            />
          </div>
          <p>
            El motorola razr 40 ultra es un teléfono moderno y flexible con un diseño clásico. Cuando se cierra, se dobla por completo a la mitad y los extremos se alinean perfectamente para crear un estilo atractivo y compacto que deja a la vista la pantalla externa más amplia hasta ahora*. Cuando se abre, se puede observar la increíble pantalla pOLED de tamaño completo.
          </p>
          <a
            className="btn btn-danger"
            rel="nofollow"
            href="http://localhost:3000/products/detalle/23">
            Ir al detalle de producto
          </a>
        </div>
      </div>
    </div>
  )
}

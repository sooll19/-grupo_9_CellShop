const servidor = "http://localhost:3000/cart/";
let countArticles = 0;
let totalPrice = 0;

const crearProducto = (data) => {
  const producto = `
  <div col-12>
  <div class="card position-relative">
      <div class="card-body d-flex align-items-center">
          <img src="/images/products/${data.image}" style="width: 150px;height: 150px;object-fit: contain;" alt="...">
          <div class="flex-grow-1">
              <h5 class="card-title">${data.model}</h5>
              <div class="d-flex align-items-center"/>

              <p class="card-text fs-5 text-success">${data.discount ? data.discount + '%OFF' :''}</p>
              <del class="card-text text-danger">$${data.price}</del>
              </div>

              <p class="card-text fw-bold fs-4">${data.discount ? '$' + (data.price - (data.discount * data.price / 100)) : ''}</p>

              <div class="d-flex justify-content-between">
                  <div>
                      <span class="p-1 text-danger" onclick="addProductToCart(${data.id})"><i class="fa-solid fa-minus"></i></span>
                      <!--   <input class="carrito__input_number" id="cantidad" value="1" min="1" max="20" name="cantidad" type="number"> -->

                      <output class="carrito__input_number p-1  id="cantidad" name="cantidad">1</output>

                      <span class="p-1 text-success"><i class="fa-solid fa-plus"></i></span>
                  </div>
                  <a class="btn btn-outline-primary" href="/products/detalle/${data.id}">Ver mas</a>
              </div>
          </div>
          <a href="#" onclick="quitarProducto('${data.id}')" class="btn text-danger position-absolute top-0 end-0"><i class="fa-solid fa-x"></i></a>
      </div>
  </div>
  </div>
  `

  return producto;
};


const pintarProductos = (products) => {
  const contenedorProductos = document.querySelector(".contenedor-producto");
  const countArticles = document.getElementById('countArticles');
  const totalPrice = document.getElementById('totalPrice');
  contenedorProductos.innerHTML = "";
  if (products) {
    products.forEach((prod) => {
      contenedorProductos.innerHTML += crearProducto(prod);
    });
  }
  countArticles.innerHTML = products.length;
  totalPrice.innerHTML = products.map(product => product.price - (product.price * product.discount / 100)).reduce((acum, sum) => acum + sum)
};

const obtenerCarrito = async () => {
  try {
    const { data } = await fetch(servidor, {
      method: "GET",
    }).then((res) => res.json());
    pintarProductos(data);
  } catch (error) {
    console.log(error);
  }
};

const quitarProducto = async (productId) => {
  try {
        await fetch(`${servidor}remove`, {
          method: "DELETE",
          body: JSON.stringify({ productId }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());
        obtenerCarrito();
  } catch (error) {
    console.log(error);
  }
};

obtenerCarrito()

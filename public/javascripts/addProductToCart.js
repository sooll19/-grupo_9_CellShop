const servidor = "http://localhost:3000/cart/";

const messageInfo = ({ message, ok }) => {
  return Swal.fire({
    //position: "top-end",
    icon: ok ? "success" : "error",
    title: ok ? "Producto agregado al carrito" : message,
    showConfirmButton: false,
    timer: 1000,
  });
};

const addProductToCart = async (productId) => {
  try {
    const { ok, message } = await fetch(`${servidor}add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId ,userId : null, quantity : 1}),
    }).then((res) => res.json());
    messageInfo({ok,message})
  } catch (error) {
    console.log(error)
  }
};

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3030;

app.use(express.static('public'));

/* RUTAS */

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','index.html'))
});
app.get('/header', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','partial','header.html'))
});
app.get('/footer', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','partial','footer.html'))
});

app.get('/lg', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','productDetail','product_lg.html'))
});
app.get('/moto', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','productDetail','product_moto.html'))
});
app.get('/samsung', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','productDetail','product_samsung.html'))
});
app.get('/tcl', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','productDetail','product_tcl.html'))
});
app.get('/xiaomi', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','productDetail','product_xiaomi.html'))
});
app.get('/accesorios', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','productDetail','product_accesorios.html'))
});
app.get('/detalle', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','productDetail','detalle.html'))
});
app.listen(PORT, () =>
  console.log(`http://localhost:${PORT}`))

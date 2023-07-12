const express = require("express");
const path = require("path");
const app = express();
const PORT = 3030;

app.use(express.static('public'));

/* rutas */
app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','index.html'))
});
app.get('/header', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','partian','header.html'))
});
app.get('/footer', (req, res) =>{
  res.sendFile(path.join(__dirname, 'views','partial','footer.html'))
});

app.listen(PORT, () =>
  console.log(`http://localhost:${PORT}`))

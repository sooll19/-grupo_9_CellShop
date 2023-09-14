const { readJSON } = require("../../data")

module.exports = (req,res) => {
  
  // return res.redirect('/');

   const {nombre, apellido, birthday, about} = req.body
        req.session.userData = {
          nombre,
          apellido,
          birthday,
          about,
        }
  /*Valores obtenidos desde el req.body
  nombre
  apellido
  birthday
  about  


 */

  // codigo para actualizar los datos del usuario en sesión
  const user = users.find(user => user.id === req.session.userLogin.id)
 
}
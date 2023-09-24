const { readJSON, writeJSON } = require("../../data")

module.exports = (req,res) => {
    const users = readJSON('users.json');
    const {nombre, apellido, birthday, about} = req.body
    const usersUpdated = users.map(user => {
        if(user.id === req.session.userLogin.id){
            return {
                ...user,
                nombre: nombre.trim(),
                apellido: apellido.trim(),
                birthday,
                about : about.trim()
            }
        }
        return user
    })

    writeJSON(usersUpdated, 'users.json');
    return res.redirect('/')
} 

  /*Valores obtenidos desde el req.body
  nombre
  apellido
  birthday
  about  
*/

//const  {nombre, apellido, birthday, about} = req.body;

  // codigo para actualizar los datos del usuario en sesión
  //const user = users.find(user => user.id === req.session.userLogin.id)
 
//}

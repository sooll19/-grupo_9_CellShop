//const {readJSON, writeJSON} = require('../../data');

  module.exports = (req,res) => {
    return res.send(req.body)
}
  
  // return res.redirect('/');
/* if(!req.session.user){
  return res.redirect('/users/login');
 }else{
  const users =readJSON('users.json');
 }
   const userid = req.session.userid;
   const userFind = users.find(user => user.id === userid);
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

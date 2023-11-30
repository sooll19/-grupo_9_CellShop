
const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = async (req, res) => {
  
    const errors = validationResult(req);
    const user = await db.User.findByPk(req.session.userLogin.id);
    const location = await db.Address.findOne({
      where: { isPrimary: true, userId: user.id },
    });

    if (errors.isEmpty()) {
      const { name, surname, birthday, about, address, city, province } =
        req.body;
      const image = req.file?.filename;

     
      db.User.update(
        {
            name : name.trim(),
            surname: surname.trim(),
            birthday : birthday || null,
            about : about.trim(),
            image,
        },
        {
            where : {
                id : req.session.userLogin.id
            }
        }
    )
        .then(response => {
            console.log(response);
            return res.redirect('/')
        })
        .catch(error => console.log(error))
   
}else {
    db.User.findByPk(req.session.userLogin.id)
    .then(user => {
        return res.render('profile', {
            ...user.dataValues,
            errors : errors.mapped()
        })
    })
    .catch(error => console.log(error))
}


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
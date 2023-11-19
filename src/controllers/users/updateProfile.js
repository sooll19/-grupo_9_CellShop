
const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);
    const user = await db.User.findByPk(req.session.userLogin.id);
    const location = await db.Address.findOne({
      where: { userId: user.id },
    });

    if (errors.isEmpty()) {
      const { name, surname, birthday, about, address, city, province } =
        req.body;
      const image = req.file?.filename;

      console.log(image)
      user.name = name?.trim() || user.name;
      user.surname = surname?.trim() || user.surname;
      user.birthday= birthday || null,
      user.about = about?.trim() || user.about;
      user.image = image || user.image;

   
  
     

      await user.save();
     
      return res.redirect("/");
    } else {
      return res.render("profile", {
        ...user.dataValues,
        errors: errors.mapped(),
      });
    }
  } catch (error) {
    console.log(error.message)
  }
};

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
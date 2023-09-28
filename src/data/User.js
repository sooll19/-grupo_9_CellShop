const {v4 : uuidv4} = require('uuid');
const { hashSync } = require('bcryptjs');

const User = function ({name, surname , city ,email,password, image}) {
this.id = uuidv4();
this.name = name.trim();
this.surname = surname.trim();
this.city = city.trim();
this.email = email.trim();
this.image = image;
this.password = hashSync(password,10);
this.rol = "user";
this.birthday = null;
this.about = null;
}

module.exports = User
const {v4 : uuidv4} = require('uuid');
const { hashSync } = require('bcryptjs');

const User = function ({name, address, city ,email,password, image}) {
this.id = uuidv4();
this.name = name.trim();
this.address = address.trim();
this.city = city.trim();
this.email = email.trim();
this.image = image;
this.password = hashSync(password,10)

}

module.exports = User
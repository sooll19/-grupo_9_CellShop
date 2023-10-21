const db = require('../../database/models')
const path = require("path");

const controllerDelete = {

remove: (req, res) => {
    db.Product.destroy({
		where : {
			id : req.params.id
		}
	}).then(response => {
		console.log(response);
		return res.redirect("/admin");
	})
	.catch((error) => console.log(error));
    
  },
};

module.exports = controllerDelete
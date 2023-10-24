const { validationResult } = require('express-validator');
const db = require('../../database/models');
const { hashSync } = require('bcryptjs');

module.exports = (req, res) => {

    console.log('----- Iniciando controlador de registro -----');

    let errors = validationResult(req);
    if (errors.isEmpty()) {

        const { name, surname, city, email, password, image } = req.body

        db.User.create({
            name: name.trim(),
            surname: surname.trim(),
            city: city.trim(),
            email: email.trim(),
            password: hashSync(password, 10),
            image,
            roleId: 2
        })
            .then(user => {
                db.Address.create({
                    userId: user.id
                })
                    .then(() =>
                        console.log('Saliendo del controlador de registro con éxito'),
                        res.redirect('/'))
            })
            .catch(error => console.log(error))

    } else {
        return res.render('register', {
            old: req.body,
            errors: errors.mapped()
        })
    }
}
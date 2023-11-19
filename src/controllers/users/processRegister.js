const { validationResult } = require('express-validator');
const db = require('../../database/models');
const { hashSync } = require('bcryptjs');

module.exports = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const { name, surname, email, password } = req.body
            const image = req.file.filename || 'userDefault.jpg'
            const user = await db.User.create({
                name: name.trim(),
                surname: surname.trim(),
                email: email.trim(),
                password: hashSync(password, 10),
                image
            })
            .then(user => {
                db.Address.create({
                    userId : user.id
                })
                .then(() => res.redirect('/'))
            })
            .catch(error => console.log(error))
            
          
        } else {
            return res.render('register', {
                old: req.body,
                errors: errors.mapped()
            })
        }
    } catch (error) {
        console.log(error)
    }
}
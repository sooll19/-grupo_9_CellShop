const {body} = require ('express-validator')
const {compareSync} = require('bcryptjs')
const {readJSON} = require('../data')
const bcrypt = require('bcryptjs/dist/bcrypt')

module.exports = [
    body('email')
    .notEmpty().withMessage('El email es requerido').bail()
    .isEmail().withMessage('El formato es inválido').bail()
    .custom((value, {req}) => {
        const users = readJSON('user.json')
        const user = users.find(user => user.email === value)
        if (!user) {
            return false
        }
        return true
    }).withMessage('El email no se encuentra registrado'),
    
    body('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .custom((value,{req}) => {
            const users = readJSON('user.json')
            const user = users.find(user => user.email === req.body.email)
            if (!compareSync(value,user.password)) {
                return false
            }
            return true
        }).withMessage('La contraseña es incorrecta')
]
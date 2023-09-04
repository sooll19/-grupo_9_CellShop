const {check, body} = require('express-validator');
const { readJSON } = require('../data');



module.exports = [
check('name')
.isLength({
    min : 2
}).withMessage('el nombre debe tener como minimo dos letras').bail()
.isAlpha('es-ES')
.withMessage('Solo se permite caracteres alfabéticos'),


check('address')
.isLength({
    min : 2
}).withMessage('el apellido debe tener como minimo dos letras').bail(),

check('city')
.notEmpty().withMessage('Debes ingresar el email').bail()
.isEmail().withMessage('El email no es valido'),

check('email')
.notEmpty().withMessage('Debes ingresar el email').bail()
.isEmail().withMessage('El email no es valido')
.custom((value) => {
const users = readJSON('user.json');
const user = users.find(user => user.email === value);
if(user){
    return false
}
return true
}).withMessage('El email ya se encuentra registrado'),

check('password')
 .isLength({
    min : 6,
    max : 12
 }).withMessage('Debe tener entre 6 y 12 caracteres'),,

body('image')
.custom((value, {req}) => {
    if(req.file){
        return true
    }
    return false
}).withMessage('No has subido ninguna imagen')


]
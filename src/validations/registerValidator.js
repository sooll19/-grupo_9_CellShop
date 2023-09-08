const { check, body, validationResult } = require('express-validator');
const { readJSON } = require('../data');
const fs = require('fs');
const path = require('path');


module.exports = [
check('name')
.isLength({
    min : 2
}).withMessage('el nombre debe tener como minimo dos letras').bail()
.isAlpha('es-ES')
.withMessage('Solo se permite caracteres alfabéticos'),


check('surname')
.isLength({
    min : 2
}).withMessage('el apellido debe tener como minimo dos letras').bail(),

check('city')
.isLength({
    min : 2
}).withMessage('La ciudad debe tener como minimo dos letras').bail()
.notEmpty().withMessage('Debes ingresar la ciudad').bail(),

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
 }).withMessage('Debe tener entre 6 y 12 caracteres'),

 body('image')
    .custom((value, {req}) => {
        let errors = validationResult(req)
        if(req.file){
            if(!errors.isEmpty()){
                const pathFile = path.join(__dirname,`../../public/images/users/${req.file.filename}`)
                const existFile = fs.existsSync(pathFile)
                if(existFile) fs.unlinkSync(pathFile)
            }
           return true
        }
        return false
    }).withMessage('No has subido ninguna imagen')
];
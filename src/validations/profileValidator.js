const moment = require('moment')
const { check, body } = require('express-validator');
const db = require('../database/models')

module.exports = [
    check('name')
        .isLength({
            min: 2
        }).withMessage('el nombre debe tener como minimo dos letras').bail()
        .isAlpha('es-ES', {ignore: ' '})
        .withMessage('Solo se permite caracteres alfabéticos'),

    check('surname')
        .isLength({
            min: 2
        }).withMessage('el apellido debe tener como minimo dos letras').bail()
        .isAlpha('es-ES', {ignore: ' '})
        .withMessage('Solo se permite caracteres alfabéticos'),
body('birthday')
.custom((value) => {
    const birthday = moment(value)
    const minDate = moment().subtract(100,'years')

    if(birthday.isBefore(minDate)){
        throw new Error('tan veijo sos?')
    }
    return true
})
.custom((value) => {
    const birthday = moment(value)
    const currentDate = moment()

    if(birthday.isAfter(currentDate)){
        throw new Error('viene del futuro')
    }
    return true
}) 
];
const { check } = require('express-validator');
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
];
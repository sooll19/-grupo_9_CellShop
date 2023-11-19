const { check } = require('express-validator');
const db = require('../database/models')

module.exports = [
    check('model')
        .isLength({
            min: 2
        }).withMessage('el nombre debe tener como minimo dos letras').bail()
       
        .withMessage('Solo se permite caracteres alfabéticos'),

    check('color')
        .isLength({
            min: 2
        }).withMessage('el apellido debe tener como minimo dos letras').bail(),

        check('description')
        .isLength({
            min: 20
        }).withMessage('el apellido debe tener como minimo dos letras').bail(),

];
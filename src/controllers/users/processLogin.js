const { validationResult } = require('express-validator')
const { readJSON } = require('../../data')

module.exports = (req, res) => {

    const errors = validationResult(req)

    if (errors.isEmpty()) {
        const users = readJSON('user.json')
        const user = users.find(user => user.email === req.body.email)
        const { id, name, rol } = user;

        req.session.userLogin = {
            id,
            name,
            rol
        }

        remember !==undefined && res.cookie("CellShop@Group",req.session.userLogin,{
            maxAge : 2000 * 60
        })

        return res.redirect('/')

    } else {
        return res.render('login', {
            errors: errors.mapped()
        })
    }
}
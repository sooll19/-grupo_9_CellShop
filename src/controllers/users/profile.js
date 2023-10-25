const db = require('../../database/models')

module.exports = (req, res) => {
    db.User.findByPk(req.session.userLogin.id,{include:['addresses']})
        .then(user => {
            const birthday = new Date(user.birthday).toISOString();
            const locationPrimary = user.addresses.find(({isPrimary}) => isPrimary)
            return res.render('profile', {
                ...user.dataValues,
                location: locationPrimary,
                birthday: birthday.split('T')[0]
            })
        })
        .catch(error => console.log(error))
}
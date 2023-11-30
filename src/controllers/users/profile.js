const db = require('../../database/models')

module.exports = (req, res) => {
    db.User.findByPk(req.session.userLogin.id,{include:['addresses']})
        .then(user => {
            const birthday = user.birthday ? new Date(user.birthday).toISOString() : null;
            const locationPrimary = user.addresses.find(({isPrimary}) => isPrimary)
            return res.render('profile', {
                ...user.dataValues,
                location: locationPrimary,
              birthday: birthday ? birthday.split('T')[0] : null,
    
            })
        })
        .catch(error => console.log(error))
}
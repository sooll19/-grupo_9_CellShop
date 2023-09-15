const { readJSON } = require("../../data")

module.exports = (req,res) => {
    const users = readJSON('user.json');
    const user = users.find(user => user.id === req.session.userLogin.id)
    
    return res.render('profile', {
        ...user 
    })
}
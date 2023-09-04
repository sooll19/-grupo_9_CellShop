const {validationResult} = require('express-validator');
const User = require('../../data/User');
const {readJSON , writeJSON} = require('../../data')

module.exports = (req,res) => {

    let errors = validationResult(req);
    if (errors.isEmpty()){

        const user = readJSON('user.json');

        let newUser = new User(req.body)

        user.push(newUser);

        writeJSON(users, 'user.json');

        return res.redirect('/')
       
    } else{
        return res.render('register',{
            old : req.body,
            errors : errors.mapped()
        })
    }
   
}
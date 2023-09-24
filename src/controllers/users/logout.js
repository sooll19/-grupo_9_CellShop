module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('cellShop',null,{
        maxAge : -1
    })
    return res.redirect('/')
}
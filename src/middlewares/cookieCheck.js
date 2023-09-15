module.exports = (req,res,next) => {
    if(req.cookies.cellShop){
        req.session.userLogin = req.cookies.cellShop
    }
    next()
}
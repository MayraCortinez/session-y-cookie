module.exports = (req,res,next) => {
    if(req.cookies.cookie){
        req.session.usuario = req.cookies.cookie
    }
    next()
}
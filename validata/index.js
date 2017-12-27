function login(req,res,next){
    if(req.session.user){
        next()
    }else{
        res.json({
            code:'404',
            msg:"没有登录"
        })
    }
}
module.exports = login;
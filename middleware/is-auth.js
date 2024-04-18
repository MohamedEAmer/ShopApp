module.exports = (req,res,next) =>{
    if(!req.session.isLoggedIn){
        return res.redirect('/login');
      }
    next();
}

//middleware that can be accessed for many times and requests

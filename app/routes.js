module.exports=function(app,passport){
  app.get('/user/:id',function(req,res){

    user.find(req.params.id,function(user){
      res.json(user);
    });
  });

  app.get('/',function(req,res){
    res.render('index');
  });

  app.get('/login',function (req, res) {
    res.render('login',{message:req.flash('loginMessage')});
  });

  app.post('/login',passport.authenticate('local-login',{
    successRedirect:'/profile',
    failureRedirect:'/login',
    failureFlash:true
  }));

  app.get('/signup',function(req,res){
    res.render('signup',{message:req.flash('signupMessage')});
  });

  app.post('/signup',passport.authenticate('local-signup',{
    successRedirect:'/profile',
    failureRedirect:'/signup',
    failureFlash:true
  }));

  app.get('/profile',isLoggedIn,function(req,res){
    res.render('protected\\profile',{user:req.user});
  });

  app.get('/auth/facebook',passport.authenticate('facebook',{scope:'email'}));

  app.get('/auth/facebook/callback',passport.authenticate('facebook',{
    successRedirect:'/profile',
    failureRedirect:'/'
  }));

  app.get('/logout',function(req,res){
    req.logout();
    res.redirect('/');
  });


};
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}
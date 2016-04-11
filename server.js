var express=require('express');
var app=express();
var user=require(__dirname+'\\users.js');
var mongoose=require('mongoose');
var cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');
var passport=require('passport');
var configDB=require('./config/database.js');
var session=require('express-session');
var flash=require('connect-flash');

mongoose.connect(configDB.url);
require('./config/passport')(passport);
// console.log(user);
app.use(express.static('public'));
// app.get('/',function(req,res){
//   res.render('index');
// });
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({secret:'ilovevodka'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.set('view engine','jade');
var routes=require('./app/routes.js')(app,passport);

app.listen(process.env.PORT||2000,function(){
  console.log('app started');
});

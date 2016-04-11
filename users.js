var users=[
{
  id:1,userName:'ishwor',password:'password',fullName:'ishwor'
},{
  id:2,userName:'ishan',password:'password',fullName:'ishan'
},{
  id:3,userName:'sushant',password:'password',fullName:'sushant'
},{
  id:4,userName:'ram',password:'password',fullName:'ram'
},{
  id:5,userName:'shyam',password:'password',fullName:'shyam'
},]

var _=require('lodash');
module.exports={
  login:function(userName,password,cb){
    var user=_.find(users,function(user){
      return user.userName===userName && user.password===password;
    });
    if(user){
      cb(true);
    }
    else {
      cb(false);
    }
  },
  find:function(userName,cb){
    var user=_.find(users,function(user){
      return user.userName===userName;
    });
    cb(user);
  }
};

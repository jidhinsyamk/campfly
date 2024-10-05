const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  username:{ type:String,required:true},
  password:{ type:String,required:true},
  role:{ type:String,requred:true},
  
})
const LoginModel= mongoose.model('login_tb',loginSchema)
module.exports=LoginModel

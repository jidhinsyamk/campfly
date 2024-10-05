const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserRegisterSchema = new Schema({
    login_id:{type:Schema.Types.ObjectId,ref:'login_tb',reqired:true},
     firstname:{type:String,required:true},
     lastname:{type:String,required:true},
     email:{type:String,required:true},
     gender:{type:String,required:true},
     dob:{type:String,required:true},
     nationality:{type:String,required:true},
     occupation:{type:String,required:true},
     address:{type:String,required:true},
     contact:{type:String,required:true},
     emergencycontact:{type:String,required:true},
      
     
 })
 const UserRegisterModel = mongoose.model('Userregister_tb',UserRegisterSchema)
 module.exports = UserRegisterModel
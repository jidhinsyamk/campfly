const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserRegisterSchema = new Schema({
    login_id:{type:Schema.Types.ObjectId,ref:'login_tb',reqired:true},
     firstname:{type:String},
     lastname:{type:String},
     email:{type:String},
     gender:{type:String},
     dob:{type:String},
     nationality:{type:String},
     occupation:{type:String},
     address:{type:String},
     contact:{type:String},
     emergencycontact:{type:String},
      
     
 })
 const UserRegisterModel = mongoose.model('Userregister_tb',UserRegisterSchema)
 module.exports = UserRegisterModel
const validator = require("validator");
const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
   name : {
       type : String,
       required : [true, 'Please Enter Your Name'],
       trime : true,
       maxlength : [100, 'User name can not exceed 100 characters.']
   },
   gender : {
       type : String,
       enum : ['MALE', 'FEMALE']
   },
   email : {
    type : String,
    required : [true, "Please enter your email"],
    unique : true,
    validate : [validator.isEmail, "Please enter valid email address."]
  },
  createdAt : {
      type : Date,
      default : Date.now
  }
})

//Query 1 : To create user table
module.exports = mongoose.model('User', userSchema);

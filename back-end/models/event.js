const validator = require("validator");
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please Enter Your Name'],
        trime : true,
        maxlength : [100, 'User name can not exceed 100 characters.']
    },
    occurance : {
        type : String,
        required : true,
        enum : ['WEEKLY', 'MONTHLY', 'YEARLY', 'ONETIME']
    },
    uid : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    startDate : {
        type : Date,
        required : true
    },
    endDate : {
        type : Date,
    }
})

//Query 2 : To create events table
module.exports = mongoose.model("Event", eventSchema);
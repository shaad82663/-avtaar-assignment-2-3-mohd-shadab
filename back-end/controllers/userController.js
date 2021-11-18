const mongoose = require('mongoose');
const User = require('../models/user');

//Error Handler for catching async errors separately.
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

//Query 3 : Insert into user table   POST => /api/v1/user/new
exports.newUser = catchAsyncErrors (async (req, res, next) => {
      
    const user = await User.create(req.body);

    res.status(200).json({
        success : true,
        user
    })
})



//Query 6 : To get all users for a list of uid     GET =>  /api/v1/users
exports.getUsers = catchAsyncErrors (async (req, res, next) => {
    const ids = req.body.uid;
    const users = await User.find({'_id' : {$in : ids} });

    res.status(200).json({
        success : true,
        users
    })
})

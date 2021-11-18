const express = require('express');
const router = express.Router();

const { newUser, getUsers} = require('../controllers/userController');

//Base URL : /api/v1
router.route("/user/new").post(newUser);
router.route("/users").get(getUsers);


module.exports = router;

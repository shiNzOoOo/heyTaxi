const express = require('express');
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

const router = express.Router();


router.post('/register' , [
    body('fullname.firstname').notEmpty().withMessage('First name is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
);




module.exports = router;    
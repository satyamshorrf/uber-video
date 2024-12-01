const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('fullname')
        .isLength({ min: 3 })
        .withMessage('Fullname must be at least 3 characters long'),
    body('email')
        .isEmail()
        .withMessage('Invalid email'),
    body('password')
        .isLength({ min: 6 }) // Updated to match the error message
        .withMessage('Password must be at least 6 characters long'),
], userController.registerUser);

module.exports = router;

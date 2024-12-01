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
], userController.registerUser

);

/**
 * @route POST /api/users/login
 * @description Authenticate user and get token
 * @access Public
 * @body {string} email - User's email address
 * @body {string} password - User's password (min 6 characters)
 * @returns {object} { token, user: { id, fullname, email } }
 * @throws {400} - Invalid email or password format
 * @throws {401} - Invalid credentials
 */
router.post('/login', [
    body('email')
        .isEmail()
        .withMessage('Invalid email'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
],
     userController.loginUser);


module.exports = router;

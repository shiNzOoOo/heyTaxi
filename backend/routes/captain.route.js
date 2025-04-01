const express = require('express'); 
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');


const router = express.Router();


router.post('/register', [
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters'),
    body('vehicle.plate').isLength({min: 6}).withMessage('Plate must be at least 6 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'moto', 'auto']).withMessage('Vehicle type must be either car or motorcycle')
], captainController.registerCaptain );

router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
], captainController.loginCaptain );

router.get('/profile', authMiddleware.authCaptains , captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptains, captainController.logoutCaptain);

module.exports = router;










module.export = router ;
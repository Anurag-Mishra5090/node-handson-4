const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.get('/login', loginController.userLoginController);

module.exports = router;
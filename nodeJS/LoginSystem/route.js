const express = require('express');
const myRoute = express.Router();
const systemControllers = require('./controllers/userController');

myRoute.get('/',systemControllers.index);

myRoute.get('/login',systemControllers.login);
myRoute.post('/login',systemControllers.loginPOST);

myRoute.get('/register',systemControllers.register);
myRoute.post('/register',systemControllers.registerPOST);

myRoute.get('/info',systemControllers.userInfo);

myRoute.post('/logout',systemControllers.logout);

module.exports = myRoute;


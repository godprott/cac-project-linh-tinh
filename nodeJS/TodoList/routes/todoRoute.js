const express = require('express');
const todoRoute = express.Router();
const todoControllers = require('../controllers/todoControllers');


todoRoute.get('/',todoControllers.index);
todoRoute.post('/add',todoControllers.add);
todoRoute.get('/delete/:id',todoControllers.delete);
todoRoute.get('/active/:id',todoControllers.status);
todoRoute.get('/update/:id', todoControllers.update);

module.exports = todoRoute;
const express = require('express');
const indexRoute = require('./route1');
const allroute = express.Router();

allroute.use(indexRoute);

module.exports = allroute;


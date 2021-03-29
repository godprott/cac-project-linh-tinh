const express = require('express');
const indexroute = express.Router();

indexroute.get('/x', function(req, res){
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!')
    res.redirect('/');
  });
   
indexroute.get('/', function(req, res){
    // Get an array of flash messages by passing the key to req.flash()
   // req.flash('info', 'cua /')
    res.render('index');
  });

module.exports = indexroute;

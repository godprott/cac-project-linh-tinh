const userModel = require('../models/User');
const passport = require('passport');

module.exports = {
    index: (req,res) => {
        res.render('index');
    },

    login: (req,res) => {
        if(!req.isAuthenticated()) {
            res.render('login');
        }
        else {
            res.redirect('/');
        }
    },

    register: (req,res) => {
        if(req.isUnauthenticated()) {
            res.render('register');
        }
        else {
            res.redirect('/');
        }
    },

    loginPOST: passport.authenticate('local', { 
        successRedirect: '/info',
        failureRedirect: '/login',
        failureFlash: true
    }),

    registerPOST: (req, res) => {
        try {
            console.log(req.body);
            userModel.registerUser(req.body);
        }
        catch(err) {
            req.flash('info', 'Trung ten roi thang loz');
            res.redirect('/register');
        }
        req.flash('error', 'DANG KY THANH CONG'); // the nay la ghi de len flash cua passport (cai error y), nhung van ok =))
        res.redirect('/login');
    },

    userInfo: (req, res) => {
        if(req.isAuthenticated()) {
            res.render('userInfo',{data: req.user});
        }
        else {
         res.redirect('/login');
        }
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    }
}
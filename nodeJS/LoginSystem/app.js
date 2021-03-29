const express = require('express');
const session = require("express-session");
const flash = require('express-flash');

const systemRoute = require("./route");
const passport = require('./auth');

const app = express();
const port = 8080;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({ 
    secret: "caigicxdc",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());


app.use(systemRoute);

app.listen(port, () => {
    console.log("run 8080 port ...");
});

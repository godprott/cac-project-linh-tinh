const express = require('express');
const flash = require('express-flash');
const session = require("express-session");
const myRoute = require('./route');

const app = express();
const port = 80;

app.set('view engine','ejs');
app.set('views','./views');

app.use(session({ 
    secret: "caigicxdc",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

app.use(myRoute);

app.listen(port, () => {
    console.log('run port 80...');
});


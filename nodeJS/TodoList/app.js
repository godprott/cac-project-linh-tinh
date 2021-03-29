const express = require("express");
const todoRoute = require("./routes/todoRoute");
const mysql = require('mysql');

const app = express();
const port = 8080;

app.set('views','./views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',todoRoute);

app.listen(port, () => {
    console.log('Listening on port 8080 ...');
});
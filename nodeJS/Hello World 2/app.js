const express = require('express');
const infoRoute = require('./routes/infoRoute'); // chua su dung dc

const app = express();
const port = 8080;

app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/info',infoRoute); // bay h no se import tat ca route vao de dung

app.use('/', (req, res, next) => {  //middleware
    console.log("bat dau ///");
    next();
})


app.get('/', (req, res) => {
    res.send("<h2>Wellcome homepage</h2>");
})


app.listen(port, () => {
    console.log("chay o port 8080 ...");
})


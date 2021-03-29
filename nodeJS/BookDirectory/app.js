const express = require('express');
const bookRoute = require("./routes/bookRoutes");

const app = express();
const port = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', bookRoute);


app.listen(port, () => {
    console.log("Run port 8080 ...");
})

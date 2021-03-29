const express = require('express');
const bookRoute = express.Router();
const bookController = require('../controllers/bookControllers');

bookRoute.get("/",bookController.index);
bookRoute.get("/info/:id",bookController.info);
bookRoute.get("/create",bookController.createBook);
bookRoute.post("/create",bookController.create);
bookRoute.post("/update",bookController.update);
bookRoute.get("/delete/:id",bookController.delete);

module.exports = bookRoute;

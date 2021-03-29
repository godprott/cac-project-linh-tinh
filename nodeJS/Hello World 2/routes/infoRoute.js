const express = require('express');
const infoRoute = express.Router();
const infoController = require('../controllers/infoControllers');


var users = [
    {name: "User1", email: "user1@gmail.com"}, 
    {name: "User2", email: "user2@gmail.com"},
    {name: "User2", email: "user3@fsf.com"}
];


infoRoute.get('/', (req, res) => {
    res.render('infoIndex', {userData: users});
  });


infoRoute.get("/search", (req, res) => {
    if(req.query.name) {
        var result = users.filter( user => {
		    return user.name.toLowerCase().indexOf(req.query.name.toLowerCase()) !== -1;
	    })
        res.render('infoSearch', {searchData: result});
        console.log("Array sau khi chay search voi query name: ", result);
    }
    else {
        res.render("infoSearch", {searchData: []});
    }
})

infoRoute.get("/create", infoController.getCreate);

infoRoute.post("/create", (req, res) => {
    users.push(req.body);
    res.redirect("/info");
    console.log(req.body)
})

infoRoute.get("/:name", (req,res) => {
    var data = users.find(user => {
        return user.name === req.params.name
    });

    res.render("moreInfo",{data}); // viet tat tu data: data

})

module.exports = infoRoute;

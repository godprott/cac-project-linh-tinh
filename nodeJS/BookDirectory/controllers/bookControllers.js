var bookData = [
    {id: 1, name: "b1 dd", des: "the witcher 1"}, 
    {id: 2, name: "b2", des: "the witcher 2"}, 
    {id: 3, name: "b3", des: "the witcher 3"}, 
];

module.exports = {
    index: (req, res) => {
        res.render("listBook", {bookData});
    },

    info: (req, res) => {
        let book =  bookData.find(book => {
            return book.id == req.params.id
        });
        let msg = "";
        if(req.query.ok) {
            msg = "Luu thanh cong !!!";
        }
        console.log("MSG:",msg);
        res.render('infoBook', {book,msg});
    },

    create: (req, res) => {
        console.log(req.body);
        bookData.push(req.body);
        res.redirect("/");
    },

    createBook: (req, res) => {
        let maxID = Math.max.apply(Math, bookData.map((object) => object.id ));
        if(bookData.length == 0) {
            maxID = 0;
        }
        var newId = maxID + 1;
        res.render('addBook', {newId});
    },

    update: (req, res) => {
        console.log("REQ BODY ID:",req.body.id);
        let book =  bookData.find(book => {
            return book.id == req.body.id
        });
        let index = bookData.indexOf(book);
        console.log(index);
        bookData[index] = req.body;
        res.redirect("/info/"+req.body.id+"?ok=yes");
    },

    delete: (req, res) => {
        let book =  bookData.find(book => {
            return book.id == req.params.id
        });
        let index = bookData.indexOf(book);
        bookData.splice(index,1);
        res.redirect("/");
    },
};
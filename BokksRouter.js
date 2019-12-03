var express = require("express");
const booksRouter = express.Router();
var mongoose=require("mongoose")
var url="mongodb://127.0.0.1:27017/bookdb";
var bookModel=require("../../model/bookModel");

var books = [

    {
        title: "YELLOW LIGHTS OF DEATH",
        genre: "Novel",
        author: "BENYAMIN",
        images: "yellow.jpg"
    },
    {
        title: "UPPE",
        genre: "short stories",
        author: "O.N.V Kurupp",
        images: "uppe.jfif"
    },
    {
        title: "CRIME FILE",
        genre: "crime novel",
        author: "Kottayam Pushpanath",
        images: "crime.jfif"
    },
    {
        title: "AADU JEEVITHAM",
        genre: "literatures",
        author: "BENYAMIN",
        images: "aadu.jpg"
    },
];
function router(nav) {
    booksRouter.route('/')// /book vanna book.ejs lekke pokum
        .get((req, res) => {
            res.render("books.ejs", { nav, title: "Books", books });
        });
    booksRouter.route('/addbooks')
        .get((req, res) => {
            res.render("addbooks.ejs", { nav, title: "ADD BOOKS" })
        });
        booksRouter.route('/delebook')
        .get((req, res) => {
            res.render("delebook.ejs", { nav, title: "DELETE BOOKS" })
        });
        booksRouter.route('/login')
        .get((req, res) => {
            res.render("login.ejs", { nav, title: "Log in" })
        });
        
    booksRouter.route('/save')
        .post((req, res) => {
            console.log(req.body);
            res.send("Book is saved")
        });
    booksRouter.route("/:id")
        .get((req, res) => {
            var i = req.params.id;
            res.render("book.ejs", { nav, book: books[i] })

        });
        booksRouter.post("/delete",function(req,res){
            bookModel.deleteOne({Genre:req.body.delebook},function(err){
                if (err) throw err
                else {
                    res.send("Book deleted...")};
            });
        });
    return booksRouter;
}

module.exports = router;
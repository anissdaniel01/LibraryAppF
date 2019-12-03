var express = require("express");
const authorsRouter = express.Router();

var authors = [
    
    {
        name: 'O.N.V Kurupp',
        dob: '27 May 1931',
        image: "onv.jfif"

    },

    {
        name: 'Kottayam Pushpanath',
        dob: '1938',
        image: "kp.jfif"

    },
    {
        name: 'Benyamin',
        dob: '1971',
        image: "ben.jpg"

    }
];

function router(nav) {
    authorsRouter.route('/')
        .get((req, res) => {
            res.render("authors.ejs", { nav, title: 'Authors', authors });// title and array list
        }
        )

    authorsRouter.route('/:id')
        .get((req, res) => {
            var i = req.params.id;
            res.render("author.ejs", { nav, author: authors[i] })
        })
        return authorsRouter;
};
module.exports=router;
const express =  require('express');
const booksRouter = express.Router();
const bodyParser = require('body-parser');

function router(navv){
    var books = [
        {
            title: 'tom and jerry',
            author:'joseph Barbera',
            genre: 'cartoon',
            img: "1.jpg"
    
        },
        {
            title: 'Randamoozham',
            author:' M.T. Vasudevan Nair',
            genre: 'drama',
            img: "2.jpg"
    
        },
        {
            title: 'Pathummayude Aadu',
            author:'jVaikom Muhammad Basheer',
            genre: 'novel',
            img: "3.jpg"
    
        }
    ]

    booksRouter.use(bodyParser.urlencoded({ extended: true }));
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            navv,
             title: 'Library',
            books
            });
    });
    booksRouter.post('/', function(req,res){
        var book = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        books.push(book);
        res.render("books", 
        {
            navv,
            title: 'Library App',
            books
        });
    })
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("book",{
            navv,
            title: 'Library',
            book: books[id]
    
    
        })
    })
    return booksRouter;

}


module.exports = router;
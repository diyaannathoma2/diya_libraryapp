const express =  require('express');
const authorsRouter = express.Router();
const bodyParser = require('body-parser');

function routers(navv){
    var authors = [
        {
            title: 'tom and jerry',
            author:'joseph Barbera',
            genre: 'Italian',
            img: "1.jpg"
    
        },
        {
            title: 'Randamoozham',
            author:' M.T. Vasudevan Nair',
            genre: 'Indian',
            img: "2.jpg"
    
        },
        {
            title: 'Pathummayude Aadu',
            author:'Vaikom Muhammad Basheer',
            genre: 'Indian',
            img: "3.jpg"
    
        }
    ]
    authorsRouter.use(bodyParser.urlencoded({ extended: true }));
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            navv,
             title: 'Library',
            authors
            });
    });
    authorsRouter.post('/', function(req,res){
        var author = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        authors.push(author);
        res.render("authors", 
        {
            navv,
            title: 'Library App',
            authors
        });
    })
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("author",{
            navv,
            title: 'Library',
            author: authors[id]
    
    
        })
    })
    return authorsRouter;

}


module.exports = routers;
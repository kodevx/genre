//An Mini web server Application called 'Vidly' to perform service to clients by peforming 
// CRUD operations on movies with specific genre and present it to clients (BACK-END ONLY)
//Developed using Express.js and node.js

const express = require('express');   //import express
const app = express(); 

const movie = [
    { name: 'Interstellar',genre: 'sci-fi' },
    { name: 'Star Wars',genre: 'sci-fi' },
    { name: 'Die Hard',genre: 'action' },
    { name: 'John Wick',genre: 'action' },
    { name: 'Shazam',genre: 'comedy' },
    { name: 'Ted',genre: 'comedy' },
];


// Getting movies of specific genre from server
app.get("/vidly/:gname",(req,res) =>{

    const gmovies = movie.filter(c => c.genre === req.params.gname);
    if(!gmovies){
        res.status(404).send("Theres no movies available uner this genre");
        return;
        }
    res.send(gmovies);
    res.end();

});

//Creating movies of specific genre on server
app.post('/vidly/:name/:gname',(req,res) =>{

        let mdata = {};
        mdata.name = req.params.name;
        mdata.genre = req.params.gname;
        movie.push(mdata);
        res.send(movie);
        res.end();
});


//Deleteing movies of specific genre from server
app.delete('/vidly/:name',(req,res) =>{
   
     let movie = [];
     mindex = movie.indexOf( m => m.name === req.params.name);
     movie.splice(mindex,1);
     res.end();
    });


//Updation of movies of specific genre on server
app.put('/vidly/:mname/:gname',(req,res) =>{
      
    let mindex = movie.findIndex(g => g.name === req.params.mname);
    movie[mindex].genre = rer.params.genre;
    res.end();    
});


const port = process.env.PORT || 3000; 
app.listen(port,() => { console.log(`Listening to port ${port}.....`)});







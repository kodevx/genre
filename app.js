 const http = require('http');   //importing modules of http

const server = http.createServer((req,res) => { //creating an object server with http object
    if(req.url === '/'){
        res.write('YOLO');
        res.end();
    }

    if(req.url === '/api/courses'){   
        res.write(JSON.stringify([1, 2, 32]));
        res.end();      
    }

});  

server.listen(3000);

console.log("Listening on port 3000....");  


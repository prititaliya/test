const http=require('http');
const fs=require("fs");

const server=http.createServer((req,res)=>{
      url=req.url;
    res.writeHead(200,{'Content-type':'text/html'});
    if(url=='/'){
        res.statuscode=200;
       let text=fs.readFileSync("home.html",'utf-8');
        res.end(text);
    }else if(url=='/about'){
        res.statuscode=200;
        let text=fs.readFileSync("about.html",'utf-8');
        res.end(text);
    }else{
        res.statuscode=404;
        res.end("<h1>404 NOT FOUND</h1>");
    }
})
// server=
server.listen(80);

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Welcome to GeeksforGeeks Node.js Tutorial');
// }).listen(8080);
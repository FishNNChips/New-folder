// #1 Prject in Javascript
//Server Creation
// 1. HTTP Module

// const { log } = require('console');
const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>
{
    console.log("Request has been made from the browser to the server.");
    // console.log(req);
    // console.log(req.method);
    // console.log(req.url);

    // res.setHeader('Content-Type','text/plain');
    // res.write("Welcome DarshilJ !!!!");
    // res.setHeader('Content-Type','text/html');
    // res.write("<h1>Welcome DarshilJ !!!!</h1>");
    // res.write("<h2>Wassup!!<h2>");
    // res.end();
    let path='./';
    switch(req.url){
        case '/':
            path+='Index.html'
            break;
        case '/about':
            path+='about.html'
        break;
        case '/log':
            path+='Log.html'
        break;
        default:
            path+='404.html'
    };

    fs.readFile(path,(err,fileData)=>{
        if(err)
        {console.log(err);}
    else
    {
        // res.write(fileData);
        res.end(fileData);
    }
});
});
//port number, host , callback funtion.
server.listen(3000,'localhost',()=>
{
    console.log('The server is listening');
});
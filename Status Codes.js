/*
100-199 :- Informative SC
200-299 :- Success SC
300-399 :- Redirects SC
400-499 :- Client side error SC
500-599 :- Server side error SC
600 and above :- User defined SC (not advisable)
*/

/*
Commonly used SC
200-Success ; 201-
307-Temporary Redirect ; 308-Permanent Redirect
400-Bad Gateway ; 404-Path Not found
500 ; 502
*/

const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>
{
    console.log("Request has been made from the browser to the server.");
    let path='./';
    switch(req.url){
        case '/':
            path+='Index.html'
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html'
            res.statusCode=200;
        break;
        case '/about-us':
        res.statusCode=301;
        res.setHeader('Location','about');
        res.end();
        break;
        case 'log':
            path+='Log.html'
        break;
        default:
            path+='404.html'
            res.statusCode=404;
    }
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

server.listen(3000,'localhost',()=>
{
    console.log('The server is listening');
});

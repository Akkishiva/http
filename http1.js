const http=require('http');
// const url=require('url');
const server=http.createServer((req,res)=>{
    // res.write('Hi welcome to server');
    // res.end();
    if(req.url==='/')
    {
        res.end('<h1>Welcome to homepage</h1>');
    }
    if(req.url==='/about')
    {
        res.end('<h1>Welcome to about page</h1>');
    }
    res.end('error page');
})

server.listen(5000);
const express=require('express'),
    path=require('path'),
    app=express();
let todos=[];

app.get('/',(req,res)=>{
   res.send('Hello Buddy!');
});
//get for get request, post for post request. But app.use can handle any kind of requests. use doesn't judge what is written after /todos in the path and doesn't judge the function that handles the request.
//anything inside express.static is expected to be a folder available like a front end on /todos path
app.use('/todos', express.static(path.join(__dirname,'public_html')));

app.get('/addtodo',(req,res)=>{
    todos.push(req.query.newtodo);
    res.redirect('/showtodos'); //jump to /showtodos request
});

app.get('/showtodos',(req,res)=>{  //while server is on, when it is shown in different tabs, it's the same as data is saved on server side.
   res.send("<ul><li>"+todos.join('</li><li>') +"</li></ul>");
});

global.x = 20;
require('./public_html/lib.js')


app.listen(2222,()=>{
    console.log('Server started at http://localhost:2222/');
});
//files in public_html aren't dynamic as they are delivered as they are. hence they're static. These are also accessible to public as a public directory. Hence,they're public static.
//res.send(${req.query.username}) was dynamic as it depends on value entered by user.

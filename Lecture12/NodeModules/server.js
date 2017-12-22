const express = require('express');
const path = require('path');
//creating server app
const app = express();

app.get('/', (req, res) => {     // handling a request form client
    console.info("Yay! We got a request");  // '/' path is request to root url
    res.send(`<h1>Hello World</h1>`)  //response sent to the request in the webpage
});

app.get('/show/form', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'form.html')); //sendFile sends the file content. The file is now accessible thorugh this server on localhost:2345
});

app.get('/show/greet',(req,res)=>{
    res.send(`Hello ${req.query.username}`); //here we access the key-value pairs after the quesion mark in the url on making request
});
app.get('/show',(req,res)=>{
    res.send("John");
});

app.listen(2345, () => {     //starts app on a particular port
    console.info("Server has started on http://localhost:2345/"); //callback when server is started
});

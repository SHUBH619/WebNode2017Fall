const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//when a request comes the body will be parsed first and then the request is handled by other app.post responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //in extended url coding some extended characters are supported
//these bodyparser middlewares will work and decode body format and then make it available inside req object as a body variable before handling requests to app.post
app.use('/', express.static(path.join(__dirname, 'frontend')));

app.post('/todos/add', (req, res) => {
    console.log(req);  //when body-parser aren't applied, if breakpoint is applied and req is checked in debugger, then we can see that value entered by user in the form isn't visible anywhere neither in query nor params unlike the get request.
    //the data isn't send in query or params but is send in body of the request . body can be in json format, zip format varies in different websites
    //body-parser package is installed to read the body. express doesn't have any functionality to read the body.
    //body-parsers can handle the body which are raw coded(sequence of bytes or in json format or url encoded(jaise get req mein data jata hai waisa jayega but in body .)
    //after adding body parser, in de bugger mode we can see that body is available with the data we entered in the form
console.log(req.body.newtodo); //now body can be accessed
    res.send(`${req.body.newtodo}`);
});


app.listen(5454, () => console.log("Server started at http://localhost:5454"));

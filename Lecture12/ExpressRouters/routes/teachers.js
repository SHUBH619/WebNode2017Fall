const express=require('express'),
    route=express.Router();

let teachers=["Prateek","Arnav","Deepak"];

//route can have its own get post use requests but it doesn't have its own server. They can't be hosted on their own server. They can be hosted within an express app. Thus,route can be treated as an app variable.
route.get('/',(req,res)=>{
        res.send(teachers);
    }
);
//route can't listen. It can be done only by servers.

route.get('/add',(req,res)=>{
    teachers.push(req.query.name);
    res.redirect('.'); //redirects to one path back. if redirected to '/', it is redirected to '/' path of entire server
});
//'..' for two path back
exports.route=route;

const express=require('express'),
    route=express.Router();

let students=["Aakash","Shreya","Madhav"];

//route can have its own get post use requests but it doesn't have its own server. They can't be hosted on their own server. They can be hosted within an express app. Thus,route can be treated as an app variable.
route.get('/',(req,res)=>{   //in this server, '/' refers to '/students'
    res.send(students);
    }
);
//route can't listen. It can be done only by servers.

route.get('/add',(req,res)=>{  //'/add' path is relative to /students not the main servers'/'
   students.push(req.query.name);
   res.redirect('.'); //redirects to one path back. if redirected to '/', it is redirected to '/' path of entire server
});
//'..' for two path back.

//for multilevel routing
// route.use('/female',router from female.js);


exports.route=route;

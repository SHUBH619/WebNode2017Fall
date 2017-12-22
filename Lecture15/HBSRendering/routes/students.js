const route=require('express').Router();

let students=[
    {name:"Raghav", course:"Launchpad"},
    {name:"Gaurav", course:"Elixir"}
];

route.get('/',(req,res)=>{
   res.render('students',{
       title:"List of students",
       heading:"Students",
       students:students //sending the object with key students assigned with array students
   })
});
// Syntax: res.render('Name of the view we want to use i.e. name of hbs file without hbs extension',Object which is available for rendering it);
exports.route=route;

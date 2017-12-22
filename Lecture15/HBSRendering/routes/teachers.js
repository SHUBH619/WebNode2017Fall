const route=require('express').Router();

let teachers=[
    {name:"Prateek", subjects:["C++","Game Development"]},
    {name:"Deepak", subjects:["Competitive","C++"]}
];

route.get('/',(req,res)=>{
    res.render('teachers', {
        title: "List of teachers",
        heading: 'Teachers',
        teachers: teachers
    })
});

exports.route=route;

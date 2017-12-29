// to start mongodb server, in terminal, create mongodb folder and => mongod --dbpath=./mongodb

const MongoClient=require('mongodb').MongoClient;

const url='mongodb://localhost:27017/exampledb';//connect to database

MongoClient.connect(url,function (err,db) {

    if(err)
        throw err;

    const todos=db.collection('todos');  //get collection todos. Creates it if doesn't exist


    //
    // let todoItems=todos.find({}); //todoItems is of type cursor. go to debug mode to see its properties.
    // // let todoItems=todo.find({done:true}); will give those whose done is true
    // todoItems.toArray((err,results)=>{
    //         if(err)
    //             throw err;
    //         console.log(results);
    //         // db.close();
    // });

    let todoItems=todos.find({
        // priority:{
        //     $gt:2 //for priority >2
        // }

        $and:[  //priority >0 and <4
            {priority:{$gt:0}},
            {priority:{$lt:4}}
        ]

    })
    todoItems.toArray((err,results)=>{
        if(err){
            throw err;
        }

        console.log(results);
        db.close();
    })



})




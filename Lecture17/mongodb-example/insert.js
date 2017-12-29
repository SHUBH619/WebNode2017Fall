// to start mongodb server, in terminal, create mongodb folder and => mongod --dbpath=./mongodb

const MongoClient=require('mongodb').MongoClient;

const url='mongodb://localhost:27017/exampledb';//connect to database

MongoClient.connect(url,function (err,db) {

    if(err)
        throw err;

    const todos=db.collection('todos');  //get collection todos. Creates it if doesn't exist

    // todos.insertOne(
    //     {
    //         task:'task 1',
    //         done:true
    //     },
    //     function (err,results) {
    //         if(err)
    //             throw err;
    //         console.log(results);  //check ops property in the last which tells about document inserted.
    //         // _id property is created by mongodb which is unique for every document at same servers/different servers in same system as well as different systems
    //         //it is recommended not to change _id explicitly as it helps in partitioning
                //ops shows changes done by the query
    //     }
    // )


    todos.insertMany([
        {
            task:'important task',
            priority:1,
            done:false
        },
        {
            task:'unnecessary task',
            priority:4,
            done:false
        },
        {
            task:'necessary task',
            priority:1,
            done:false
        }],
        (err,results)=>{
        console.log(results);
        db.close();
        }
    )

})




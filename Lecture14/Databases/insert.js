const mysql=require('mysql2');

const connection=mysql.createConnection({   //create connection to database
    host:'localhost',  //must
    database:'dbone', //must
    user:'userone',   //must
    password:'passone',  //if user has password
    // port:'',   //by default 3306. enter if using different port
});

function inserttodo(task,done){
    connection.query(   //create a query
        `insert into todos(task,done) values('${task}',${done})`  , //query
        (err,result,cols)=>{   //callback
            if(err)
                throw err;
            console.log(result);   //query values  //here an object will come as output unlike select where row values come
            console.log(cols); //fields  //null comes as output
            //add breakpoint on console.log(rows) and check what's available
        }
    );
}

inserttodo('another task',false);

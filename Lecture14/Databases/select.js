const mysql=require('mysql2');

const connection=mysql.createConnection({   //create connection to database
    host:'localhost',  //must
    database:'dbone', //must
    user:'userone',   //must
    password:'passone',  //if user has password
    // port:'',   //by default 3306. enter if using different port
});

connection.query(   //create a query  //runs asynchronously
    'select * from todos'  , //query
    (err,result,cols)=>{   //callback   //for select query second argument is rows and third is columns
        if(err)
            throw err;
        console.log(result);   //query values
        console.log(cols); //fields
        //add breakpoint on console.log(rows) and check what's available
}
);

const express = require('express')// created a variable for express.
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password@123',
    database: 'CRUD_DB'
})

app.get('/',(rec,res) => {
    const sqlInsert = "INSERT INTO MovieReviews(MovieName,MovieReview) VALUES ('Conjuring','Horror Movie');"
    db.query(sqlInsert,(err,result) => {
        res.send('Hello from LNMIIT');
    })
});

app.listen(3001, ()=> {
    console.log('running on port 3001');
});
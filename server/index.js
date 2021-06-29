const express = require('express')// created a variable for express.
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password@123',
    database: 'CRUD_DB'
})

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get" ,(rec,res) => {
    const sqlSelect = "SELECT * from MovieReviews;"
    db.query(sqlSelect,(err,result) =>{
        res.send(result);
    });
});
app.post("/api/insert",(req,res) => {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert = "INSERT INTO MovieReviews(MovieName , MovieReview) VALUES (?,?)"
    db.query(sqlInsert,[movieName , movieReview] , (err,result) => {
        res.send(result);
    });
});

app.put("/api/update",(req,res) => {
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlUpdate = "UPDATE MovieReviews set MovieReview = ? where MovieName= ?;"
    db.query(sqlUpdate,[movieReview,movieName],(err,result) => {
        if(err)console.log(err);
    });
});

app.delete("/api/delete/:movieName",(req,res) =>{
    const Name = req.params.movieName
    const sqlDelete = "DELETE FROM MovieReviews WHERE MovieName = ?";
    db.query(sqlDelete,Name, (err,result) => {
        if(err) console.log(err);
    });
});



app.listen(3001, ()=> {
    console.log('running on port 3001');
});
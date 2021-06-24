const express = require('express')// created a variable for express.
const app = express()

app.get('/',(rec,res) => {
    res.send('Hello - from Yash JAIN Xd');
});

app.listen(3001, ()=> {
    console.log('running on port 3001');
});
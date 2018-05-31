const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bookstore')
const db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/books or /api/genres');
}); 

app.listen(3000);
console.log('Running on port 3000...')
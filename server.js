const express = require('express');
const app = express();
const connectDB = require('./DB/Connection.js');
const Port = process.env.Port || 3000;

connectDB;
app.listen(Port, () => console.log('Server Started'));



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });
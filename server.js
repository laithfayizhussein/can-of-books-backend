
const express = require('express') 
const app = express()
const mongoose = require('mongoose');
const getBooks = require('./controller/books.controller');

require('dotenv').config();
const PORT = process.env.PORT;
const seedMyUsercollection = require('./models/user.model')
const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors())

mongoose.connect('mongodb://localhost:27017/myFavoriteCats',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

seedMyUsercollection();

app.get('/books', getBooks)
app.get('/', function (req, res) { 
    res.send('TEST');})


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

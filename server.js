
const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
app.use(express.json())
app.use(cors()) // after you initialize your express app instance
require('dotenv').config();
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;
const mongoose = require('mongoose');
const {
    addBook,
    getBooks,
    deleteBook,
    updateBook } = require('./controllers/Book.controller');

// const seedUserData = require('./models/User.model');
mongoose.connect(`${mongoUrl}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// seedUserData();
 
app.get('/',
    function (req, res) { 
        res.send('Hello World') 
    })

app.get('/books', getBooks);
app.post('/book', addBook);
app.delete('/book/:book_idx', deleteBook);
app.put('/book/:book_idx', updateBook)
app.listen(port) 
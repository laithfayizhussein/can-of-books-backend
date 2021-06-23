const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
app.use(express.json())
app.use(cors()) // after you initialize your express app instance
require('dotenv').config();
const port =process.env.PORT;
const mongoUrl = process.env.MONGO_URL;
const mongoose = require('mongoose');
const{
 addBook,
 getBooks,
 deleteBook,
 updateBook}= require('./controllers/Book.controller');

const seedUserData = require('./models/User.model');


mongoose.connect(`${mongoUrl}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);




  // seedUserData();

// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 
app.get('/books', getBooks);
app.post('/book' , addBook);
app.delete('/book/:book_idx', deleteBook);
app.put('/book/:book_idx',updateBook)
app.listen(port,`server listining on port ${port}`) // kick start the express server to work
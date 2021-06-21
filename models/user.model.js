'use strict';

const mongoose = require('mongoose');
const BookSchema = require('./books.model');


const UserSchema = new mongoose.Schema({
    email: String,
    books: [BookSchema],
})
const userModel = mongoose.model('users', UserSchema);



 const seedMyUsercollection = () => {
    const ahmad = new userModel({
        email: 'ahmadabudames1999@gmail.com',
        books: [
            {
                name: 'ahmad abu dames',
                description: 'science ',
                status: 'still reading',
            }
        ]

    });
    const laith = new userModel({
        email: 'laithalsanory9919@gmail.com',
        books: [
            {
                name: 'laith',
                description: 'programming',
                status: 'finish reading',
            }
          
        ]

    })

    laith.save();
    ahmad.save();
}

module.exports = userModel;

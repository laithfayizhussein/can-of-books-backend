'use strict'

const mongoose = require('mongoose')
const BookSchema = require('./Book.model')




const userSchema = new mongoose.Schema({
    email: { type: String },
    Books: [BookSchema]

})


const userModel = mongoose.model('user', userSchema)


const seedUserData = () => {
    const newUser = new userModel({
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
// seedUserData();

module.exports = userModel;


 
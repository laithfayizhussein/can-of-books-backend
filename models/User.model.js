'use strict'

const mongoose = require('mongoose')
const BookSchema = require('./Book.model')

/*
 We are going to use mongoose, to do two things:
    - Create the schema
    - generate the model
*/


// Here we are creating a new schema obj, which will be used later on to generate the model
const userSchema = new mongoose.Schema({
    email: { type: String },
    Books: [BookSchema]

})

// generate the model based on the schema
const userModel = mongoose.model('user', userSchema)



const seedUserData = () => {
    const newUser = new userModel(
        {
        email: 'laithalsanory9919@gmail.com',
        Books: [{
            name: 'Java',
            description: ' advance',
            status: 'available',
        },
        {
            name: 'Html',
            description: 'intero HTML',
            status: 'available',
        },
        {
            name: 'csharp',
            description: ' advance',
            status: 'available',
        }]
    
    }
    
    );

    const ahmadNew = new userModel(
        {
        email: 'ahmadabudames1999@gmail.com',
        Books: [{
            name: 'js',
            description: 'coding',
            status: 'available',
        },
        {
            name: 'Html',
            description: 'advance HTML',
            status: 'available',
        },
        {
            name: 'c##',
            description: 'middle',
            status: 'available',
        }]
    
    }
    
    );
    newUser.save();
    ahmadNew.save();
    console.log(newUser);
    console.log(ahmadNew);
}



// seedUserData();

module.exports = userModel;
// module.exports = seedUserData;
'use strict'

const mongoose = require ('mongoose')

/*
 We are going to use mongoose, to do two things:
    - Create the schema
    - generate the model
*/

const BookSchema = new mongoose.Schema ({
    name: { type: String },
    description : { type: String } ,
    status :  { type: String } 

})


module.exports = BookSchema ;
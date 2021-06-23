'use strict';

const userModel = require('../models/User.model');


const getBooks = (req , res) => {
    const {email} = req.query;
    userModel.findOne({email: email},(error , user)=>{
        if (error){
            res.send(error)
        }else{
            res.json(user)
        }
    });
}




const addBook = (req , res) => {
    const {email, name ,description , status } = req.body;
    console.log(req.body)
    userModel.findOne({email: email},(error , user)=>{
        if (error){
            res.send(error)
        }else{
            user.Books.push({name : name , description : description , status :status})
            user.save();
            res.json(user)
        }
    });
}


module.exports = {
    getBooks , 
    addBook }
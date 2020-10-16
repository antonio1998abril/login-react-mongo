const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require("moment");

const UserShema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


module.exports={User:mongoose.model('user',UserShema)};
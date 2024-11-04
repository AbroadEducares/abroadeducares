const mongoose = require('mongoose');

const EnquiryFormSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    subject:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})
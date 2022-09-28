const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    state:{
        type:String,
        required:true,
        unique:true,
    },

    District:{
        type:String,
        required:true,
    },

    market:{
        type:String,
        required:true,
    },

    commodity:{
        type:String,
        required:true,
    },

    min_price:{
        type:Number,
        required:true,
    },

    max_price:{
        type:Number,
        required:true,
    },

    modal_price:{
        type:Number,
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now
    },

    updatedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports= mongoose.model('marketdata', dataSchema)
const express = require('express');

const app = express();

const mongoose = require('mongoose');

const path = require('path')

const ejs = require('ejs');

const bodyParser = require('body-parser');

const uri = "mongodb+srv://admin:admin123@cluster0.nfxkdu7.mongodb.net/marketdata?retryWrites=true&w=majority"

const PORT = 5000;

const dataRoutes = require('./routes/routes');

mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Database is connected")
    }
})

app.set('view engine', 'ejs')

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');

    next();
})

app.use('/', dataRoutes);

app.get('/',(req,res)=>{

    res.render('home')
})



app.listen(PORT, ()=>{
    console.log(`The port is started at ${PORT}`)
})
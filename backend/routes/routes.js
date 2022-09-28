const express = require('express');

const router = express.Router();

const path = require('path')

const ejs = require('ejs');

const mongoose = require('mongoose');

const dataModel = require('../DataModels/DataModel')

router.get('/', async (req,res)=>{

    const dataGov = await dataModel.find();

    res.json(dataGov);
})

router.post('/add', async (req,res)=>{

    const data = new dataModel({
        state:req.body.state,
        District:req.body.District,
        market:req.body.market,
        commodity:req.body.commodity,
        min_price:req.body.min_price,
        max_price:req.body.max_price,
        modal_price:req.body.modal_price,
    })

    try{
        await data.save();

        res.send('Data is added');
    }catch(err){
        console.log("Data is not created")
    }
})

module.exports = router;
const express = require("express")
const router = express.Router();
const Burger = require('../Models/burgerModel')

router.get("/getAllBurgers", async(req, res) =>{
    try{
        const burgersData= await Burger.findAll({})
        res.send(burgersData)
    }catch(err){
        return res.status(400).json({message:err})
    }
})
module.exports = router;
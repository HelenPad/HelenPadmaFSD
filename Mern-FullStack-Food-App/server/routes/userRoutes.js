const express = require("express");
const router = express.Router();
const User = require("../Models/orderModel")

router.post("/register", async(req, res) =>{
    const{name, email ,password } = req.body


    try{
        const newUser =  await newUser({name, email, password})
    if(user.length>0) {
        newUser.save()
     const currentUser = {
        name :user[0].name,
        email : user[0].email,
        isAdmin : user[0].isAdmin,
        _id : user[0]._id
     } 
     res.send(currentUser)
    }
     else{
        return res.status(400).json({message: "user Login Failed"})
     }
    } catch(err){
        res.err.status(400).json({message: err})
    }
})

module.exports = router

router.post("/login", async(req, res) =>{
    const{email ,password } = req.body


    try{
        const user = await user({ email, password})
    if(user.length>0)
     {
        const currentUser = {
            name :user[0].name,
            email : user[0].email,
            isAdmin : user[0].isAdmin,
            _id : user[0]._id
        }
        res.send(currentUser)
    }
     else{
        return res.status(400).json({message: "user Login Failed"})
     }
    } catch(err){
       return res.status(400).json({message: `Something went wrong`})
    }
})

module.exports = router
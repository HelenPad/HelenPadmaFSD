const  mongoose = require("mongoose");

// const { Schema } = mongoose;

const MONGO_URL = 'mongodb+srv://username123:username123@cluster0.mqcxp9r.mongodb.net/mern-food'

mongoose.connect(MONGO_URL, {useUnifiedTopology:true, useNewUrlParser:true})
const db = mongoose.connection

db.on('connected', ()=>{
    console.log(`Connected to Successfully`)
})

db.on('error', ()=>{
    console.log(`Error connecting to database`)
})

module.exports = mongoose
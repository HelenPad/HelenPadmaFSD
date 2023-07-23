const express = require("express")
const db = require("./db")
const Burger = require('./Models/burgerModel.js')

const app = express();

app.use(express.json());

const burgersRoute = require('../server/routes/burgersRoute')
const userRoute = require('../server/routes/userRoutes')
const orderRoute = require('../server/routes/orderRouter')


app.use('/api', burgersRoute);
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)

app.get("/", (req, res) => {
   res.send("Server in Running Successfully");
})



const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port`)

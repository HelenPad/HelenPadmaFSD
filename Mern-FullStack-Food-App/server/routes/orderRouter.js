const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51NWi3fSBLKizpGFDJz3f1DTgxD4bfFz1NeKPzQ4I779fGYIt8ePdWwaFNEGlIpw1II1DGZ2rYFFsCchOWcuxPXYN00l2LQ6p6c"
);
const order = require("../Model/orderModel");
router.post("/placehoder", async (req, res) => {
  const { token, subTotal, customer, currentUser, cartItems } = req.body;

  try {
    const customer = await stripe.customer.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      // create new Order in database with all details
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.addres_zip,
        },
        transactionKey: payment.source.id,
      });
      newOrder.save();
      res.send("order placed successfull");
    } else {
      res.send("Payment failed");
    }
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.post('/getuserorders', async(req,res) =>{
  const{userid} = req.body
  try{
  const orders = await order.find({userid : userid}).sort({_id: -1})
  res.send (orders)
  }catch(err){
   return res.status(400).json({message: 'something went wrong'})
  }
})

module.exports = router;

const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name:{type : String, require},
    email:{type:String, require},
    userid:{type:String, require},
    orderItems :[],
    shippingAddress: {type:Object, require},
    orderAmount:{type:Number, require},
    isDelivered : {type: Boolean, require, default:false},
    transactionId:{type:String, require}
},{
    timestamps: true // Saves createdAt and updatedAt fields automatically
})

module.exports = mongoose.model('orders', orderSchema)
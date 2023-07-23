const mongoose = require("mongoose");

const burgerSchema = mongoose.Schema({
    name: { type: String, require},
    Price:{ type: String, require },
    catagory:{ type: String, require },
    img:{ type: String, require },
    description:{ type: String, require}
}, {
    timestamps: true
}) 

const burgerModel = mongoose.model('burgers', burgerSchema);

module.exports = burgerModel

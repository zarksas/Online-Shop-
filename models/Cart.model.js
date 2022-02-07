const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    product: []
})






const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart
const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    text: String,
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    product: {
        ref: "Product",
        type: mongoose.SchemaTypes.ObjectId
    }
})



const Review = mongoose.model('Review', reviewSchema);

module.exports = Review
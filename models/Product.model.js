const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  categoryId: {
    ref: "Category",
    type: mongoose.SchemaTypes.ObjectId,
  },
  branId: {
    ref: "Brand",
    type: mongoose.SchemaTypes.ObjectId,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

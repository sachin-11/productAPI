const mongoose = require('mongoose');


const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
    },
    brand: {
      type: String,
    },
    category: {
      type: String
    },
    description: {
     type: String
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
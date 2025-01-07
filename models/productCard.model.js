const mongoose = require("mongoose");

const productCardSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
    default: [],
  },
  productTitle: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  reviews: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  discount: {
    type: Number,
  },
  offerDiscription: {
    type: String,
  },
  variant: {
    type: String,
    enum: [
      "2023 Model - 1 Ton 3 Star",
      "2023 Model - 2 Ton 4 Star",
      "2024 Model - 1 Ton 3 Star",
    ],
  },
  connectivity: {
    type: String,
    enum: ["Wi-Fi", "Bluetooth", "Wi-Fi & Bluetooth", 'No'],
  },
});

const ProductCard = mongoose.model("ProductCard", productCardSchema);

module.exports = ProductCard;

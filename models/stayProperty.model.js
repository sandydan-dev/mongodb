const mongoose = require("mongoose");

const stayPropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: String,
    pricePerNight: Number,
    capacity: {
      type: Number,
      default: 0,
    },
    isPetFriendly: {
      type: Boolean,
      default: false,
    },
    hasWiFi: {
      type: Boolean,
      default: false,
    },
    hasParking: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const StayProperty = mongoose.model("StayProperty", stayPropertySchema);

module.exports = StayProperty;

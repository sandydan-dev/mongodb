const mongoose = require("mongoose");

const bookDataSchema = new mongoose.Schema({
  title: String,
  genre: String,
  // referece author model
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

const BookData = mongoose.model("BookData", bookDataSchema);

module.exports = BookData;

const mongoose = require("mongoose");

const recipeCardSchema = new mongoose.Schema({
  imageURL: String,
  title: String,
  description: String,
  ingredients: String,
  description: String,
  cookingTime: String,
  servings: String,
  servings: Number,
  preppingTime: String,
  note: String,
});

const RecipeCard = mongoose.model("RecipeCard", recipeCardSchema);

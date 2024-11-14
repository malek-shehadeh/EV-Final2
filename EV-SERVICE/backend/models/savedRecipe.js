const mongoose = require("mongoose");

const SavedRecipeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  collectionName: { type: String, default: "General", required: true },
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  createdAt: { type: Date, default: Date.now },
});

const SavedRecipe = mongoose.model("SavedRecipe", SavedRecipeSchema);

module.exports = SavedRecipe;

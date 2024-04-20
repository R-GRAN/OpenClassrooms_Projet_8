const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  userId: { type: String , required: true},
  title: { type: String , required: true},
  category: { type: String, required: true },
  description: { type: String , required: true},
  imageUrl: { type: String, required: true},
});

module.exports = mongoose.model("Project", projectSchema);
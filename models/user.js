const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shashanknaikal27:TG7dA6dD8yVZpwaN@cluster0.vovvzup.mongodb.net/Backend_Social?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  profilePic: {
    type: "String",
    default: "default.jpg",
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

module.exports = mongoose.model("user", userSchema);

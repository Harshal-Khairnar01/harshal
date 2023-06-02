const mongoose = require("mongoose");

// Defining Schema
const msgSchema = mongoose.Schema({
  uname: { type: String, require: true, trim: true },
  email: { type: String, required: true, trim: true },
  msg: { type: String, required: true },
});

// compiling Schema / Model
const msgModel=mongoose.model("msg",msgSchema);

module.exports=msgModel;
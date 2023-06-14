const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  sale: Number,
  purchase: Number,
  ammount: Number,
});

module.exports = mongoose.model("Customer", customerSchema);

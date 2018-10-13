
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CartSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  item: {
    type: String,
    
  },
  quantity: {
    type: Number,
    max: 10,
  }
});

module.exports = Cart = mongoose.model("cart", CartSchema);
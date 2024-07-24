const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart:[
    {
    productId: {
      // type: mongoose.Schema.Types.ObjectId,
      type:Number,
      ref: 'Product',
      required: true
    },
    qty: {
      type: Number,
      required: true
    }
  }
  ]
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const JuradoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  baseValue: {
    type: Number,
    require: true,
  }
});

const Jurado = mongoose.model('jurados', JuradoSchema);

module.exports = Jurado;

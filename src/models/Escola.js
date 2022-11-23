const mongoose = require('mongoose');

const EscolaSchema = new mongoose.Schema({
  name_full: {
    type: String,
    require: true,
  },
  name: {
    type: Number,
    require: true,
  },
  div:{
    type: Number,
    require:true,
  },
});

const Escola = mongoose.model('escolas', EscolaSchema);

module.exports = Escola;

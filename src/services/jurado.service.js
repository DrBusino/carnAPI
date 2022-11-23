

const Jurados = require('../models/jurado');

const findAllJuradoService = async () => {
  const jurados = await Jurados.find();
  return jurados;
};
module.exports = {
 findAllJuradoService
};

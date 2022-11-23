const { default: mongoose } = require('mongoose');
const juradosService = require('../services/jurado.service');




const findAllJuradoController = async (req, res) => {
  const jurados = await juradosService.findAllJuradoService();
  res.send(jurados);
};


module.exports = {
    findAllJuradoController
};

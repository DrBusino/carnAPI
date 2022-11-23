const { default: mongoose } = require('mongoose');
const escolasService = require('../services/escola.service');

const findAllEscolaController = async (req, res) => {
  const escolas = await escolasService.findAllEscolaService();
  res.send(escolas);
};

module.exports = {
  findAllEscolaController,
};

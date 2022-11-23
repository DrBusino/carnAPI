const Escolas = require('../models/Escola');

const findAllEscolaService = async () => {
  const escolas = await Escolas.find();
  return escolas;
};
module.exports = {
  findAllEscolaService,
};

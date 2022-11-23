const route = require('express').Router();
const controllerEscola = require('../controllers/escola.controller');

route.get('/todos-escolas', controllerEscola.findAllEscolaController);

module.exports = route;

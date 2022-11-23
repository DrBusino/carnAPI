const route = require('express').Router();
const controllerJurado = require('../controllers/jurado.controller')


route.get('/todos-jurados', controllerJurado.findAllJuradoController);





module.exports = route;

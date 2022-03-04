var route=require('express').Router();
var controllerMethods = require('../controllers/person.controller');

route.get('/persons',controllerMethods.findAll);

route.get('/persons/:id',controllerMethods.findById);

route.post('/person',controllerMethods.create);

route.put('/person/:id',controllerMethods.update);

route.delete('/person/:id',controllerMethods.delete);

module.exports = route;
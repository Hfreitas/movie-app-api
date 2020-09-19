const { Router } = require('express');
const routes = require('./routes');
const { validation, schemas, login } = require('../middlewares');

const user = Router();

user.route('/').post(validation(schemas.userSchema), routes.registryUser);
user.route('/login').post(validation(schemas.loginSchema), login, routes.login);

module.exports = user;

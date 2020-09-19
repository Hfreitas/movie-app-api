const { auth, login } = require('./loginAuthMiddleware');
const { schemas, validateSchema } = require('./validationMiddleware');

module.exports = {
  auth,
  login,
  validation: validateSchema,
  schemas,
};

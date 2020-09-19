const { auth, login } = require('./loginAuthMiddleware');
const { mediaSearch } = require('./validationMiddleware');

module.exports = {
  auth,
  login,
  validation: { mediaSearch },
};

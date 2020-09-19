const auth = require('./authMiddleware');
const login = require('./loginMiddleware');

module.exports = {
  auth,
  login,
};

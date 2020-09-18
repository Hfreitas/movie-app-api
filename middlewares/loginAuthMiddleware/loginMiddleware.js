const jwt = require('jsonwebtoken');
const { jwtConfig, key } = require('./config');

module.exports = async (req, res, next) => {
  try {
    const { data } = req;

    const loginToken = jwt.sign({ data }, key, jwtConfig);

    return res.status(200).json({ token: loginToken });
  } catch (error) {
    return next(error);
  }
};

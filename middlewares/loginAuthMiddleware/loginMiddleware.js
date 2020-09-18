const jwt = require('jsonwebtoken');
const { jwtConfig, key } = require('./config');
const { generateError } = require('../../utils');

const errorCode = 401;

module.exports = async (req, res, next) => {
  try {
    const { data } = req;

    const loginToken = jwt.sign({ data }, key, jwtConfig);

    return res.status(200).json({ token: loginToken });
  } catch (error) {
    return next(generateError(errorCode, error));
  }
};

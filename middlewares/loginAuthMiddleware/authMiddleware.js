const jwt = require('jsonwebtoken');
const { checkUserData } = require('../../services/userServices');
const { key } = require('./config');
const { generateError } = require('../../utils');

const errorCode = 401;

module.exports = (required = true) => async (req, _res, next) => {
  try {
    const { authorization } = req.headers;

    if (!required) next();
    if (required && !authorization) throw new Error('missing auth token');

    const decodedInfo = jwt.verify(authorization, key);
    const { _id } = decodedInfo.data;
    const userData = await checkUserData('_id', _id);

    if (!userData) throw new Error('invalid token');

    req.user = { ...userData };
    return next();
  } catch (error) {
    return next(generateError(errorCode, error));
  }
};

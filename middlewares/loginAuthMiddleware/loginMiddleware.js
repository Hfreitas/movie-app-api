const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { jwtConfig, key } = require('./config');
const { checkUserData } = require('../../services/userServices');
const { generateError } = require('../../utils');

const errorCode = 401;

module.exports = async (req, _res, next) => {
  try {
    const { email, password } = req.body;

    const user = await checkUserData('email', email);

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!user) throw new Error('user not found');
    if (!checkPassword) throw new Error('wrong password');

    const { password, ...userData } = user;
    const loginToken = jwt.sign({ data: userData }, key, jwtConfig);

    req.token = loginToken;

    return next();
  } catch (error) {
    return next(generateError(errorCode, error));
  }
};

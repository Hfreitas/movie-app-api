const bcrypt = require('bcrypt');
const { user } = require('../models');

const saltRounds = 10;

const encryptPassword = async (password) => bcrypt.hash(password, saltRounds);

const checkUserData = async (param = '', paramValue) => {
  const data = await user.findUser(param, paramValue);
  return user ? user[param] : null;
};

const create = async ({ name, email, password }) => {
  const checkUserEmail = await checkUserData('email', email);

  if (checkUserEmail) throw new Error('user email alreadys registered');

  const hashPassword = await encryptPassword(password);
  const addUser = await user.createUser(name, email, hashPassword);
  
  return { ...addUser };
};

module.exports = {
  create,
};

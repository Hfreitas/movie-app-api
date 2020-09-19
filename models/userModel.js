const connection = require('./connection');

const createUser = async (name, email, password) => {
  try {
    const connect = await connection('users');
    const userRegister = await connect.insertOne({
      name,
      email,
      password,
      created: Date.now(),
    });
    const { insertedId: _id } = userRegister;
    return { _id, created: Date.now() };
  } catch (error) {
    throw new Error();
  }
};

const findUser = async (param = '', paramValue) => {
  try {
    const connect = await connection('users');
    const searchQuery = await connect.findOne({ [param]: paramValue });

    return searchQuery;
  } catch (error) {
    throw new Error();
  }
};

module.exports = {
  createUser,
  findUser,
};

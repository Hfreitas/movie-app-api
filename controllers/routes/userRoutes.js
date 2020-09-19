const { addUser } = require('../../services');

const registryUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userData = await addUser(name, email, password);
    return res.status(201).json({
      message: `User id.${userData._id} created at ${userData.created}`,
    });
  } catch (error) {
    next(error);
  }
};

const userLogin = async (req, res, next) => {
  try {
    const { token } = req;

    if (!token) throw new Error();

    return res.status(200).json({ message: 'user is logged', token });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  registryUser,
  userLogin,
};

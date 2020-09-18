const { SECRET: key } = process.env;

const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

module.exports = {
  key,
  jwtConfig,
};

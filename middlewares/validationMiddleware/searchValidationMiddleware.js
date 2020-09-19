const Joi = require('joi');
const { generateError } = require('../../utils');

const errorCode = 400;

const movieSearchSchema = Joi.object({
  title: Joi.string().min(3).required(),
  type: Joi.string().valid('movie', 'series', 'episode').required(),
  page: Joi.number().integer().positive().less(101),
});

module.exports = async (req, _res, next) => {
  try {
    const requestValidation = await movieSearchSchema.validateAsync(req.body, {
      render: false,
    });

    if (requestValidation.error) {
      throw new Error(requestValidation.error);
    }

    return next();
  } catch (error) {
    return next(generateError(errorCode, error));
  }
};

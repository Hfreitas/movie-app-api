const Joi = require('joi');
const { generateError } = require('../../utils');

const errorCode = 400;

const schemas = {
  movieSearchSchema: Joi.object({
    title: Joi.string().min(3).required(),
    type: Joi.string().valid('movie', 'series', 'episode').required(),
    page: Joi.number().integer().positive().less(101),
  }),
};

const validateSchema = (schema) => async (req, _res, next) => {
  try {
    const requestValidation = await schema.validateAsync(req.body, {
      render: false,
    });

    if (requestValidation.error) {
      const { details } = requestValidation.error;
      const message = details.map((i) => i.message).join(',');
      throw new Error(message);
    }

    return next();
  } catch (error) {
    return next(generateError(errorCode, error));
  }
};

module.exports = {
  schemas,
  validateSchema,
};

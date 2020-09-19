const Joi = require('joi');
const { generateError } = require('../../utils');

const errorCode = 400;

/* Regex reference: https://stackoverflow.com/questions/19605150/
regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
 */

const schemas = {
  movieSearchSchema: Joi.object({
    title: Joi.string().min(3).required(),
    type: Joi.string().valid('movie', 'series', 'episode').required(),
    page: Joi.number().integer().positive().less(101),
  }),
  userSchema: Joi.object({
    name: Joi.string().alphanum().min(5).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: {
          allow: ['com', 'net'],
        },
      })
      .required(),
    password: Joi.string()
      .pattern(
        new RegExp(
          /* Minimum eight and maximum 10 characters, at least one uppercase letter,
           one lowercase letter, one number and one special character: */
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,10}$',
        ),
      )
      .required(),
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

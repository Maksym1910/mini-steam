const Joi = require('joi');

const registrationValidator = async (registrationData) => {
  const emailTlds = ['com', 'net', 'ru', 'ua'];

  const schema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: emailTlds } })
        .required(),
    password: Joi.string()
        .min(5)
        .max(20)
        .required(),
    username: Joi.string()
        .alphanum()
        .min(5)
        .max(20)
        .required(),
    age: Joi.number()
        .min(5)
        .max(100)
        .required(),
  });

  try {
    await schema.validateAsync(registrationData);
  } catch (err) {
    return err;
  }
};


export {
  registrationValidator,
};

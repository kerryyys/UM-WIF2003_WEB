import { StatusCodes } from "http-status-codes";

/**
 * Middleware to validate request parameters using Joi schema.
 * @param {Object} schema - Joi schema to validate against.
 */
export const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(
      { ...req.params, ...req.body },
      { abortEarly: false }
    );

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: errorMessage });
    }

    next();
  };
};

import { StatusCodes } from "http-status-codes";
import NotFoundError from "../errors/NotFoundError.js";
import ValidationError from "../errors/ValidationError.js";

// Map of error classes to their corresponding HTTP status codes
const errorStatusMap = new Map([
  [NotFoundError, StatusCodes.NOT_FOUND],
  [ValidationError, StatusCodes.BAD_REQUEST],
]);

/**
 * Handles errors and sends appropriate HTTP responses.
 * @param {Object} res - The response object.
 * @param {Error} error - The error object.
 */
export const handleError = (res, error) => {
  const statusCode =
    errorStatusMap.get(error.constructor) || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || "An unexpected error occurred";

  console.log(error);
  res.status(statusCode).json({ message });
};

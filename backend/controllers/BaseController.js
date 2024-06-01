import { handleError } from "../utils/errorHandler.js";

/**
 * BaseController class to handle common request and response operations.
 */
class BaseController {
  /**
   * Handles a request by executing the provided service method.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} serviceMethod - The service method to execute.
   * @param  {...any} params - Additional parameters for the service method.
   */
  async handleRequest(req, res, serviceMethod, ...params) {
    try {
      const result = await serviceMethod(...params);
      res.status(200).json(result);
    } catch (error) {
      handleError(res, error);
    }
  }
}

export default BaseController;

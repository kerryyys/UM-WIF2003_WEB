export type Response = {
  status: number;
  data: any;
};

export type ErrorHandler = (error: any) => void;

export type SuccessHandler = (data: any) => void;

// Utility functions
export const handleSuccess = (res: Response): any => {
  if (res.status === 200) {
    return res.data;
  }
  throw new Error(`Unexpected status code: ${res.status}`);
};

export const handleError = (errMsg: string): ErrorHandler => {
  return (error) => {
    console.error(errMsg, error);
  };
};

export const logMessage = (message: string): void => {
  console.log(message);
};

// High-level functions using utility functions
export const logResponse = (res: Response): any => {
  try {
    return handleSuccess(res);
  } catch (error) {
    handleError("Failed to log response")(error);
  }
};

export const readAndReturn = (res: Response, errMsg: string): any => {
  try {
    return handleSuccess(res);
  } catch (error) {
    handleError(errMsg)(error);
  }
};

export const readAndLog = (
  res: Response,
  successMsg: string,
  errMsg: string,
  action: () => void = () => {}
): void => {
  try {
    handleSuccess(res);
    logMessage(successMsg);
    action();
  } catch (error) {
    handleError(errMsg)(error);
  }
};

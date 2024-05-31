import StatusCode from "http-status-codes";

export const handleBadRequest = (res, error, msg) => {
  console.error(error);
  return res.status(StatusCode.BAD_REQUEST).json({ message: msg });
};

export const handleInternalServerError = (res, error) => {
  console.error(error);
  return res
    .status(StatusCode.INTERNAL_SERVER_ERROR)
    .json({ message: "Internal server error" });
};

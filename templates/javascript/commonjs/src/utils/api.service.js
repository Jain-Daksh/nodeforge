const { httpStatus } = require('./httpStatus');

const Success = (
  res,
  message,
  data = null,
  statusCode = httpStatus.OK,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const Failed = (
  res,
  message,
  statusCode = httpStatus.BAD_REQUEST,
  error = null,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};

module.exports = {
  Success,
  Failed,
};
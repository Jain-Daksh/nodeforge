import { Response } from "express";
import { httpStatus } from "./httpStatus";

export const Success = (
  res: Response,
  message: string,
  data: unknown = null,
  statusCode = httpStatus.OK,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const Failed = (
  res: Response,
  message: string,
  statusCode = httpStatus.BAD_REQUEST,
  error: unknown = null,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
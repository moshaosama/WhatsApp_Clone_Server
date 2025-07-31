import { Response } from "express";

export const successResponse = (
  res: Response,
  message: string,
  data: unknown
) => {
  return res.status(200).json({
    statusbar: "success",
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  statusCode: number,
  message: string
) => {
  return res.status(statusCode).json({
    statusbar: "error",
    message,
  });
};

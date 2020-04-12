import { Request, Response } from 'express';

export const catchErrors = (fn: Function) => {
  return (req: Request, res: Response, next: Function) => {
    return fn(req, res, next).catch(next);
  };
};

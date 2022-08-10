import { NextFunction, Request, Response } from "express";

const userCtrl = {
  get: async (req: Request, res: Response, next: NextFunction) => {},
  getById: async (req: Request, res: Response, next: NextFunction) => {},
  post: async (req: Request, res: Response, next: NextFunction) => {},
  put: async (req: Request, res: Response, next: NextFunction) => {},
  delete: async (req: Request, res: Response, next: NextFunction) => {},
};
export default userCtrl;

import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { TUserRequest } from "../Interfaces/users.interfaces";

const verifyBodyRequest =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validatedData: TUserRequest = schema.parse(req.body);

    req.body = validatedData;

    return next();
  };

export default verifyBodyRequest;

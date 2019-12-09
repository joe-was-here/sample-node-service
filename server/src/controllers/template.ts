import { Request, Response, NextFunction } from 'express';

const sendHello = (req: Request, res: Response, next: NextFunction) => {
  res.json({
    hello: 'world, all appears to be in good shape here.',
  });
  return next();
};

export { sendHello };

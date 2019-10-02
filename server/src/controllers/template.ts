import {Request, Response, NextFunction} from 'express';

const sendHello = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        hello: 'world'
    });
    return next();
};

export { sendHello };
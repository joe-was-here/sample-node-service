"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendHello = (req, res, next) => {
    res.json({
        hello: 'world'
    });
    return next();
};
exports.sendHello = sendHello;

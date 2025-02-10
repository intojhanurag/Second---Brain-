"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
var config_1 = require("./config");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var userMiddleware = function (req, res, next) {
    var header = req.headers["authorization"];
    var decoded = jsonwebtoken_1.default.verify(header, config_1.JWT_PASSWORD);
    if (decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "You are not loged in"
        });
    }
};
exports.userMiddleware = userMiddleware;

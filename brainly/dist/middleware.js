"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const config_1 = require("./config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userMiddleware = (req, res, next) => {
    console.log("Headers received:", req.headers);
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        res.status(401).json({ message: "Unauthorized : No token provided" });
        return;
    }
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.JWT_PASSWORD);
        req.userId = Array.isArray(decoded.id) ? decoded.id[0] : decoded.id;
        console.log("User authenticated with id :", req.userId);
        next();
    }
    catch (error) {
        console.error("Jwt verification failed", error);
        res.status(403).json({ message: "Invalid token" });
    }
};
exports.userMiddleware = userMiddleware;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = exports.LinkModel = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
mongoose_1.default.connect("mongodb+srv://aojharaj2004:arpitojha%40com@cluster0.qhh6b.mongodb.net/brainly");
const UserSchema = new mongoose_2.Schema({
    username: { type: String, unique: true },
    password: String
});
exports.UserModel = (0, mongoose_2.model)("User", UserSchema);
const ContentSchema = new mongoose_2.Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: 'Tag' }],
    type: String,
    userId: [{ type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true }],
});
const LinkSchema = new mongoose_2.Schema({
    hash: String,
    userId: [{ type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true, unique: true }],
});
exports.LinkModel = (0, mongoose_2.model)("Link", LinkSchema);
exports.ContentModel = (0, mongoose_2.model)("Content", ContentSchema);

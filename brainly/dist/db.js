"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = exports.UserModel = void 0;
//create user model and schema
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_2 = require("mongoose");
mongoose_1.default.connect("mongodb+srv://aojharaj2004:arpitojha%40com@cluster0.qhh6b.mongodb.net/brainly");
//userSchema
var UserSchema = new mongoose_2.Schema({
    username: { type: String, unique: true },
    password: String
});
//userModel- user- is the name of the model userSchema
exports.UserModel = (0, mongoose_2.model)("User", UserSchema);
var ContentSchema = new mongoose_2.Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: 'Tag' }],
    userId: [{ type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true }],
});
exports.ContentModel = (0, mongoose_2.model)("Content", ContentSchema);

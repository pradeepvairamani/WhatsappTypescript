"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const whatsappSchema = new mongoose_1.default.Schema({
    message: String,
    name: String,
    timestamp: String
});
exports.default = mongoose_1.default.model('messagecontents', whatsappSchema);
//# sourceMappingURL=dbMessages.js.map
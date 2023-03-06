"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const Logger_1 = __importDefault(require("./Logger"));
/**
 * Get logger instance
 * @param {LoggerOptions} opts
 * @returns {Logger}
 */
const getLogger = (opts) => {
    return new Logger_1.default(opts);
};
var Logger_2 = require("./Logger");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return __importDefault(Logger_2).default; } });
exports.default = getLogger;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogFile = exports.Console = exports.BaseTarget = void 0;
var BaseTarget_1 = require("./Base/BaseTarget");
Object.defineProperty(exports, "BaseTarget", { enumerable: true, get: function () { return __importDefault(BaseTarget_1).default; } });
var Console_1 = require("./Console");
Object.defineProperty(exports, "Console", { enumerable: true, get: function () { return __importDefault(Console_1).default; } });
var LogFile_1 = require("./LogFile");
Object.defineProperty(exports, "LogFile", { enumerable: true, get: function () { return __importDefault(LogFile_1).default; } });

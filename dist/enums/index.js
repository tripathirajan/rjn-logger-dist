"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLabel = exports.LogLevel = exports.ColorCode = exports.LogFileMaxSize = exports.LogRotateFrequency = exports.MaxLogAge = exports.TargetType = void 0;
/**
 * Type of showing log content
 * @enum {string}
 * @readonly
 */
var TargetType;
(function (TargetType) {
    TargetType["CONSOLE"] = "console";
    TargetType["FILE"] = "file";
    TargetType["REMOTE"] = "remote";
    TargetType["MONGODB"] = "mongodb";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
/**
 * Max age to keep logs
 * @enum {string}
 * @readonly
 */
var MaxLogAge;
(function (MaxLogAge) {
    MaxLogAge["WEEK"] = "7d";
    MaxLogAge["TWO_WEEK"] = "14d";
    MaxLogAge["THREE_WEEK"] = "21d";
    MaxLogAge["MONTH"] = "30d";
})(MaxLogAge = exports.MaxLogAge || (exports.MaxLogAge = {}));
/**
 * Log rotate frequency
 * @enum {string}
 * @readonly
 */
var LogRotateFrequency;
(function (LogRotateFrequency) {
    LogRotateFrequency["ONE_DAY"] = "24h";
    LogRotateFrequency["TWO_DAY"] = "48h";
    LogRotateFrequency["THREE_DAY"] = "72h";
})(LogRotateFrequency = exports.LogRotateFrequency || (exports.LogRotateFrequency = {}));
/**
 * Log file size
 * @enum {string}
 * @readonly
 */
var LogFileMaxSize;
(function (LogFileMaxSize) {
    LogFileMaxSize["ONE_MB"] = "1MB";
})(LogFileMaxSize = exports.LogFileMaxSize || (exports.LogFileMaxSize = {}));
/**
 * ASCII color code
 * @enum {string}
 * @readonly
 */
var ColorCode;
(function (ColorCode) {
    ColorCode["RESET"] = "\u001B[0m";
    ColorCode["RED"] = "\u001B[31m";
    ColorCode["YELLOW"] = "\u001B[33m";
    ColorCode["GREEN"] = "\u001B[32m";
    ColorCode["BLUE"] = "\u001B[34m";
    ColorCode["MAGENTA"] = "\u001B[35m";
    ColorCode["CYAN"] = "\u001B[36m";
    ColorCode["BG_RED"] = "\u001B[41m";
    ColorCode["BG_YELLOW"] = "\u001B[43m";
    ColorCode["BG_GREEN"] = "\u001B[42m";
    ColorCode["BG_BLUE"] = "\u001B[44m";
    ColorCode["BG_MAGENTA"] = "\u001B[45m";
    ColorCode["BG_CYAN"] = "\u001B[46m";
})(ColorCode = exports.ColorCode || (exports.ColorCode = {}));
/**
 * Log level
 * @enum {number}
 * @readonly
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["FATAL"] = 0] = "FATAL";
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["INFO"] = 3] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 4] = "DEBUG";
    LogLevel[LogLevel["TRACE"] = 5] = "TRACE";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
/**
 * Log label
 * @enum {string}
 * @readonly
 */
var LogLabel;
(function (LogLabel) {
    LogLabel["FATAL"] = "fatal";
    LogLabel["ERROR"] = "error";
    LogLabel["WARN"] = "warn";
    LogLabel["INFO"] = "info";
    LogLabel["DEBUG"] = "debug";
    LogLabel["TRACE"] = "trace";
})(LogLabel = exports.LogLabel || (exports.LogLabel = {}));

/**
 * Type of showing log content
 * @enum {string}
 * @readonly
 */
export declare enum TargetType {
    CONSOLE = "console",
    FILE = "file",
    REMOTE = "remote",
    MONGODB = "mongodb"
}
/**
 * Max age to keep logs
 * @enum {string}
 * @readonly
 */
export declare enum MaxLogAge {
    WEEK = "7d",
    TWO_WEEK = "14d",
    THREE_WEEK = "21d",
    MONTH = "30d"
}
/**
 * Log rotate frequency
 * @enum {string}
 * @readonly
 */
export declare enum LogRotateFrequency {
    ONE_DAY = "24h",
    TWO_DAY = "48h",
    THREE_DAY = "72h"
}
/**
 * Log file size
 * @enum {string}
 * @readonly
 */
export declare enum LogFileMaxSize {
    ONE_MB = "1MB"
}
/**
 * ASCII color code
 * @enum {string}
 * @readonly
 */
export declare enum ColorCode {
    RESET = "\u001B[0m",
    RED = "\u001B[31m",
    YELLOW = "\u001B[33m",
    GREEN = "\u001B[32m",
    BLUE = "\u001B[34m",
    MAGENTA = "\u001B[35m",
    CYAN = "\u001B[36m",
    BG_RED = "\u001B[41m",
    BG_YELLOW = "\u001B[43m",
    BG_GREEN = "\u001B[42m",
    BG_BLUE = "\u001B[44m",
    BG_MAGENTA = "\u001B[45m",
    BG_CYAN = "\u001B[46m"
}
/**
 * Log level
 * @enum {number}
 * @readonly
 */
export declare enum LogLevel {
    FATAL = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    DEBUG = 4,
    TRACE = 5
}
/**
 * Log label
 * @enum {string}
 * @readonly
 */
export declare enum LogLabel {
    FATAL = "fatal",
    ERROR = "error",
    WARN = "warn",
    INFO = "info",
    DEBUG = "debug",
    TRACE = "trace"
}

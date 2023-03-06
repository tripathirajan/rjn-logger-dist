"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
/**
 * Utility class
 * @class
 */
class Utility {
    /**
     * getColor
     * @description - It receives the log level as argument and return the color code for that log level
     * @static
     * @access pubic
     * @param {LogLevel} level
     * @returns {ColorCode} colorCode
     */
    static getColor(level) {
        let color = enums_1.ColorCode.RESET;
        switch (level) {
            case enums_1.LogLevel.FATAL:
                color = enums_1.ColorCode.BG_MAGENTA;
                break;
            case enums_1.LogLevel.ERROR:
                color = enums_1.ColorCode.BG_RED;
                break;
            case enums_1.LogLevel.WARN:
                color = enums_1.ColorCode.BG_YELLOW;
                break;
            case enums_1.LogLevel.INFO:
                color = enums_1.ColorCode.BG_BLUE;
                break;
            case enums_1.LogLevel.DEBUG:
                color = enums_1.ColorCode.BG_GREEN;
                break;
            case enums_1.LogLevel.TRACE:
                color = enums_1.ColorCode.BG_CYAN;
                break;
            default:
                color = enums_1.ColorCode.RESET;
        }
        return color;
    }
    /**
     * objectToLogString
     * @static
     * @access public
     * @param {Record<string, any>} objectPayload
     * @returns {string} concatenated string of object's key-values
     */
    static objectToLogString(objectPayload) {
        const objectKeys = Object.keys(objectPayload);
        let logString = '';
        for (const key of objectKeys) {
            const content = objectPayload[key];
            if (typeof content === 'object') {
                logString += this.objectToLogString(content);
            }
            else {
                logString += ` --[${key.toUpperCase()}]= ${content}`;
            }
        }
        return logString;
    }
}
exports.default = Utility;

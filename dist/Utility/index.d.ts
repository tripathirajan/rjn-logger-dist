import { ColorCode, LogLevel } from '../enums';
/**
 * Utility class
 * @class
 */
declare class Utility {
    /**
     * getColor
     * @description - It receives the log level as argument and return the color code for that log level
     * @static
     * @access pubic
     * @param {LogLevel} level
     * @returns {ColorCode} colorCode
     */
    static getColor(level: LogLevel): ColorCode;
    /**
     * objectToLogString
     * @static
     * @access public
     * @param {Record<string, any>} objectPayload
     * @returns {string} concatenated string of object's key-values
     */
    static objectToLogString(objectPayload: Record<string, any>): string;
}
export default Utility;

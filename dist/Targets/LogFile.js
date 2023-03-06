"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const BaseTarget_1 = __importDefault(require("./Base/BaseTarget"));
/**
 * LogFile - log content to file
 * @class
 * @classdesc This class contain the feature of writing log content on file
 * @extends BaseTarget
 */
class LogFile extends BaseTarget_1.default {
    /**
     * @constructor
     * @param {FileTargetOption} opts
     * @returns {LogFile} instance
     */
    constructor(opts) {
        const { prettyPrintConfig, stream } = opts;
        super({ prettyPrintConfig, stream });
        /**
         * File name of log file
         * @access private
         * @default
         */
        this.fileName = '%LOG_LEVEL%-%DATE%';
        /**
         * File extension of log file
         * @access private
         * @default
         */
        this.fileExt = '.log';
        /**
         * Max log age of log file
         * @access private
         * @default
         */
        this.maxLogAge = enums_1.MaxLogAge.WEEK;
        /**
         * Log rotate frequency of log file
         * @access private
         * @default
         */
        this.logRotateFrequency = enums_1.LogRotateFrequency.ONE_DAY;
        /**
         * Max log file size of log file
         * @access private
         * @default
         */
        this.maxLogFileSize = enums_1.LogFileMaxSize.ONE_MB;
        /**
         * Timestamp format of log file
         * @access private
         * @default
         */
        this.timestampFormat = 'DD-MM-YYYY';
        const { fileName, fileExt, maxLogAge, logRotateFrequency, maxLogFileSize, timestampFormat } = opts;
        // set properties
        if (fileName !== undefined)
            this.setFileName(fileName);
        if (fileExt !== undefined)
            this.setFileExt(fileExt);
        if (maxLogAge !== undefined)
            this.setMaxLogAge(maxLogAge);
        if (logRotateFrequency !== undefined)
            this.setLogRotateFrequency(logRotateFrequency);
        if (maxLogFileSize !== undefined)
            this.setMaxLogAge(maxLogFileSize);
        if (timestampFormat !== undefined)
            this.setTimestampFormat(timestampFormat);
    }
    /**
     * getFileName
     * @access public
     * @returns fileName
     */
    getFileName() {
        return this.fileName;
    }
    /**
     * set log FileName
     * @param {string} value
     * @returns {void}
     */
    setFileName(value) {
        this.fileName = value;
    }
    /**
     * Gets file ext
     * @access public
     * @returns file ext
     */
    getFileExt() {
        return this.fileExt;
    }
    /**
     * Sets file ext
     * @access public
     * @param {string} value
     */
    setFileExt(value) {
        this.fileExt = value;
    }
    /**
     * Gets max log age
     * @access public
     * @returns max log age
     */
    getMaxLogAge() {
        return this.maxLogAge;
    }
    /**
     * Sets max log age
     * @access public
     * @param {string} value
     */
    setMaxLogAge(value) {
        this.maxLogAge = value;
    }
    /**
     * Gets log rotate frequency
     * @access public
     * @returns log rotate frequency
     */
    getLogRotateFrequency() {
        return this.logRotateFrequency;
    }
    /**
     * Sets log rotate frequency
     * @access public
     * @param {string} value
     */
    setLogRotateFrequency(value) {
        this.logRotateFrequency = value;
    }
    /**
     * Gets max log file size
     * @access public
     * @returns max log file size
     */
    getMaxLogFileSize() {
        return this.maxLogFileSize;
    }
    /**
     * Sets max log file size
     * @access public
     * @param {string} value
     */
    setMaxLogFileSize(value) {
        this.maxLogFileSize = value;
    }
    /**
     * Gets timestamp format
     * @access public
     * @returns timestamp format
     */
    getTimestampFormat() {
        return this.timestampFormat;
    }
    /**
     * Sets timestamp format
     * @access public
     * @param {string} value
     */
    setTimestampFormat(value) {
        this.timestampFormat = value;
    }
    /**
     * Writes payload
     * @access public
     * @param {LogOptions} payload
     */
    writePayload(payload) {
        throw new Error('Method not implemented.');
    }
}
exports.default = LogFile;

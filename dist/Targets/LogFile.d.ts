import { LogFileOption, LogOptions } from '../types';
import BaseTarget from './Base/BaseTarget';
/**
 * LogFile - log content to file
 * @class
 * @classdesc This class contain the feature of writing log content on file
 * @extends BaseTarget
 */
declare class LogFile extends BaseTarget {
    /**
     * File name of log file
     * @access private
     * @default
     */
    private fileName;
    /**
     * File extension of log file
     * @access private
     * @default
     */
    private fileExt;
    /**
     * Max log age of log file
     * @access private
     * @default
     */
    private maxLogAge;
    /**
     * Log rotate frequency of log file
     * @access private
     * @default
     */
    private logRotateFrequency;
    /**
     * Max log file size of log file
     * @access private
     * @default
     */
    private maxLogFileSize;
    /**
     * Timestamp format of log file
     * @access private
     * @default
     */
    private timestampFormat;
    /**
     * @constructor
     * @param {FileTargetOption} opts
     * @returns {LogFile} instance
     */
    constructor(opts: LogFileOption);
    /**
     * getFileName
     * @access public
     * @returns fileName
     */
    getFileName(): string;
    /**
     * set log FileName
     * @param {string} value
     * @returns {void}
     */
    setFileName(value: string): void;
    /**
     * Gets file ext
     * @access public
     * @returns file ext
     */
    getFileExt(): string;
    /**
     * Sets file ext
     * @access public
     * @param {string} value
     */
    setFileExt(value: string): void;
    /**
     * Gets max log age
     * @access public
     * @returns max log age
     */
    getMaxLogAge(): string;
    /**
     * Sets max log age
     * @access public
     * @param {string} value
     */
    setMaxLogAge(value: string): void;
    /**
     * Gets log rotate frequency
     * @access public
     * @returns log rotate frequency
     */
    getLogRotateFrequency(): string;
    /**
     * Sets log rotate frequency
     * @access public
     * @param {string} value
     */
    setLogRotateFrequency(value: string): void;
    /**
     * Gets max log file size
     * @access public
     * @returns max log file size
     */
    getMaxLogFileSize(): string;
    /**
     * Sets max log file size
     * @access public
     * @param {string} value
     */
    setMaxLogFileSize(value: string): void;
    /**
     * Gets timestamp format
     * @access public
     * @returns timestamp format
     */
    getTimestampFormat(): string;
    /**
     * Sets timestamp format
     * @access public
     * @param {string} value
     */
    setTimestampFormat(value: string): void;
    /**
     * Writes payload
     * @access public
     * @param {LogOptions} payload
     */
    writePayload(payload: LogOptions): void;
}
export default LogFile;

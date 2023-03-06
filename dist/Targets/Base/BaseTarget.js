"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
/**
 * BaseTarget class
 * For each target class it is mandatory to extend the BaseTarget class
 * by extending base class, you only need to override the write method
 * @class
 */
class BaseTarget {
    /**
     * @constructor
     * @param {TargetOption} opts
     */
    constructor(opts) {
        /**
         * Stream  of base target
         * @public
         * @default {Writable} stdout
         */
        this.stream = process_1.stdout;
        /**
         * Determines whether colorized is
         * @access private
         * @default true
         */
        this.isColorized = true;
        /**
         * Determines whether formatted is
         * @access private
         * @default true
         */
        this.isFormatted = true;
        /**
         * Determines whether json format is
         * @access private
         * @default false
         */
        this.isJsonFormat = false;
        if ((opts === null || opts === void 0 ? void 0 : opts.stream) !== undefined)
            this.setStream(opts.stream);
        const { isColorized, isFormatted, isJson } = opts.prettyPrintConfig;
        // colorized
        if (isColorized !== undefined)
            this.setIsColorized(isColorized);
        // formatted payload
        if (isFormatted !== undefined)
            this.setIsFormatted(isFormatted);
        // json payload
        if (isJson !== undefined)
            this.setIsJsonFormat(isJson);
    }
    /**
     * Set IsColorized
     * @access public
     * @param {boolean} isColorized
     * @returns {void}
     */
    setIsColorized(isColorized) {
        this.isColorized = isColorized;
    }
    /**
     * Get IsColorized
     * @access public
     * @returns {boolean} IsColorized
     */
    getIsColorized() {
        return this.isColorized;
    }
    /**
     * Get IsFormatted
     * @access public
     * @returns {boolean} isFormatted
     */
    getIsFormatted() {
        return this.isFormatted;
    }
    /**
     * Set IsFormatted
     * @access public
     * @param {boolean} isFormatted
     * @returns {void}
     */
    setIsFormatted(isFormatted) {
        this.isFormatted = isFormatted;
    }
    /**
     * Get IsJsonFormat
     * @access public
     * @returns {boolean} isJsonFormat
     */
    getIsJsonFormat() {
        return this.isJsonFormat;
    }
    /**
     * Set IsJsonFormat
     * @access public
     * @param {boolean} isJsonFormat
     * @returns {void}
     */
    setIsJsonFormat(isJsonFormat) {
        this.isJsonFormat = isJsonFormat;
    }
    /**
     * Get Stream
     * @access public
     * @returns {Writable} stream
     */
    getStream() {
        return this.stream;
    }
    /**
     * Set Stream
     * @param {Writable} stream
     * @returns {void}
     */
    setStream(stream) {
        this.stream = stream;
    }
}
exports.default = BaseTarget;

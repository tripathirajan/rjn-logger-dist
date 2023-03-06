/// <reference types="node" />
import { Writable } from 'stream';
import { TargetOption, ITarget, LogOptions } from '../../types';
/**
 * BaseTarget class
 * For each target class it is mandatory to extend the BaseTarget class
 * by extending base class, you only need to override the write method
 * @class
 */
declare abstract class BaseTarget implements ITarget {
    /**
     * Stream  of base target
     * @public
     * @default {Writable} stdout
     */
    stream: Writable;
    /**
     * Determines whether colorized is
     * @access private
     * @default true
     */
    private isColorized;
    /**
     * Determines whether formatted is
     * @access private
     * @default true
     */
    private isFormatted;
    /**
     * Determines whether json format is
     * @access private
     * @default false
     */
    private isJsonFormat;
    /**
     * writePayload
     * @abstract
     * @param {LogOptions} payload
     * @param {string} messageKey
     * @returns {void}
     */
    abstract writePayload(payload: LogOptions, messageKey: string): void;
    /**
     * @constructor
     * @param {TargetOption} opts
     */
    constructor(opts: TargetOption);
    /**
     * Set IsColorized
     * @access public
     * @param {boolean} isColorized
     * @returns {void}
     */
    setIsColorized(isColorized: boolean): void;
    /**
     * Get IsColorized
     * @access public
     * @returns {boolean} IsColorized
     */
    getIsColorized(): boolean;
    /**
     * Get IsFormatted
     * @access public
     * @returns {boolean} isFormatted
     */
    getIsFormatted(): boolean;
    /**
     * Set IsFormatted
     * @access public
     * @param {boolean} isFormatted
     * @returns {void}
     */
    setIsFormatted(isFormatted: boolean): void;
    /**
     * Get IsJsonFormat
     * @access public
     * @returns {boolean} isJsonFormat
     */
    getIsJsonFormat(): boolean;
    /**
     * Set IsJsonFormat
     * @access public
     * @param {boolean} isJsonFormat
     * @returns {void}
     */
    setIsJsonFormat(isJsonFormat: boolean): void;
    /**
     * Get Stream
     * @access public
     * @returns {Writable} stream
     */
    getStream(): Writable;
    /**
     * Set Stream
     * @param {Writable} stream
     * @returns {void}
     */
    setStream(stream: Writable): void;
}
export default BaseTarget;

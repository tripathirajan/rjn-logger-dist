import { ILogger, LoggerOptions } from '../types';
/**
 * Logger
 * @class
 * @access public
 * @classdesc logger class to generate the logs
 * @implements {ILogger}
 */
declare class Logger implements ILogger {
    /**
     * Min level of logger
     * @access private
     * @default
     */
    private minLevel;
    /**
     * Message key of logger
     * @access private
     * @default
     */
    private messageKey;
    /**
     * Base  of logger
     * @access private
     * @default
     */
    private base;
    /**
     * Targets  of logger
     * @access private
     * @default
     */
    private targets;
    /**
     * Default targets of logger
     * @access private
     * @default
     */
    private defaultTargets;
    /**
     * Log label mapper of logger
     * @access private
     * @default
     */
    private logLabelMapper;
    /**
     * Creates an instance of logger.
     * @constructor
     * @param {LoggerOptions} opts
     */
    constructor(opts: LoggerOptions);
    /**
     * Configures targets
     * @access private
     * @param {(LogLevelTarget[] | undefined)}targets
     * @returns {void}
     */
    private configureTargets;
    /**
     * Configures default targets
     * @access private
     * @returns {void}
     */
    private configureDefaultTargets;
    /**
     * Logs logger
     * @access private
     * @param {LogOptions} options
     * @returns void
     */
    private log;
    /**
     * Fatals logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} meta
     */
    fatal(message: string, meta?: Record<string, any>): void;
    /**
     * Errors logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} meta
     */
    error(message: string, meta?: Record<string, any>): void;
    /**
     * Warns logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} meta
     */
    warn(message: string, meta?: Record<string, any>): void;
    /**
     * Infos logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} [meta]
     */
    info(message: string, meta?: Record<string, any>): void;
    /**
     * Debugs logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} [meta]
     */
    debug(message: string, meta?: Record<string, any>): void;
    /**
     * Traces logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} [meta]
     */
    trace(message: string, meta?: Record<string, any>): void;
}
export default Logger;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const Console_1 = __importDefault(require("../Targets/Console"));
const enums_1 = require("../enums");
/**
 * Logger
 * @class
 * @access public
 * @classdesc logger class to generate the logs
 * @implements {ILogger}
 */
class Logger {
    /**
     * Creates an instance of logger.
     * @constructor
     * @param {LoggerOptions} opts
     */
    constructor(opts) {
        /**
         * Min level of logger
         * @access private
         * @default
         */
        this.minLevel = enums_1.LogLevel.TRACE;
        /**
         * Message key of logger
         * @access private
         * @default
         */
        this.messageKey = 'message';
        /**
         * Base  of logger
         * @access private
         * @default
         */
        this.base = {};
        /**
         * Targets  of logger
         * @access private
         * @default
         */
        this.targets = [];
        /**
         * Default targets of logger
         * @access private
         * @default
         */
        this.defaultTargets = {
            fatal: undefined,
            error: undefined,
            warn: undefined,
            info: undefined,
            debug: undefined,
            trace: undefined,
        };
        /**
         * Log label mapper of logger
         * @access private
         * @default
         */
        this.logLabelMapper = ['fatal', 'error', 'warn', 'info', 'debug', 'trace'];
        // set properties
        if (opts.minLevel !== undefined)
            this.minLevel = opts.minLevel;
        if (opts.messageKey !== undefined)
            this.messageKey = opts.messageKey;
        if (opts.base !== undefined)
            this.base = opts.base;
        // configure default targets
        this.configureDefaultTargets();
        // overrides targets
        this.configureTargets(opts.targets);
    }
    /**
     * Configures targets
     * @access private
     * @param {(LogLevelTarget[] | undefined)}targets
     * @returns {void}
     */
    configureTargets(targets) {
        // configure for passed targets
        let temp = [];
        if (targets !== undefined) {
            for (const logTarget of targets) {
                const { level, target } = logTarget;
                this.targets.push({ level, target });
                temp.push(level);
            }
        }
        // configure for remaining targets
        if ((temp === null || temp === void 0 ? void 0 : temp.length) < 6) {
            const remainingTargets = this.logLabelMapper.filter((_label, index) => !(temp === null || temp === void 0 ? void 0 : temp.includes(index)));
            for (const index of remainingTargets.keys()) {
                const logLabel = this.logLabelMapper[index];
                const defaultTarget = this.defaultTargets[logLabel];
                this.targets.push({ level: index, target: defaultTarget });
            }
        }
        temp = [];
    }
    /**
     * Configures default targets
     * @access private
     * @returns {void}
     */
    configureDefaultTargets() {
        const logLevels = Object.keys(this.defaultTargets);
        for (const level of logLevels) {
            this.defaultTargets[level] = new Console_1.default({
                stream: level === enums_1.LogLabel.ERROR || level === enums_1.LogLabel.FATAL ? process_1.stderr : process_1.stdout,
                prettyPrintConfig: {
                    isColorized: true,
                    isFormatted: true,
                },
            });
        }
    }
    /**
     * Logs logger
     * @access private
     * @param {LogOptions} options
     * @returns void
     */
    log(options) {
        var _a;
        if (options.level > this.minLevel) {
            return;
        }
        const logObject = Object.assign({ level: options.level, [this.messageKey]: options.message, timestamp: options.timestamp || new Date() }, this.base);
        if (Object.keys(options).length > 2) {
            logObject.meta = Object.assign({}, options);
            delete logObject.meta.level;
            delete logObject.meta.message;
        }
        const logTarget = (_a = this.targets.find((target) => target.level === options.level)) === null || _a === void 0 ? void 0 : _a.target;
        logTarget === null || logTarget === void 0 ? void 0 : logTarget.writePayload(logObject, this.messageKey);
    }
    /**
     * Fatals logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} meta
     */
    fatal(message, meta) {
        this.log(Object.assign({ level: enums_1.LogLevel.FATAL, message }, meta));
    }
    /**
     * Errors logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} meta
     */
    error(message, meta) {
        this.log(Object.assign({ level: enums_1.LogLevel.ERROR, message }, meta));
    }
    /**
     * Warns logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} meta
     */
    warn(message, meta) {
        this.log(Object.assign({ level: enums_1.LogLevel.WARN, message }, meta));
    }
    /**
     * Infos logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} [meta]
     */
    info(message, meta) {
        this.log(Object.assign({ level: enums_1.LogLevel.INFO, message }, meta));
    }
    /**
     * Debugs logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} [meta]
     */
    debug(message, meta) {
        this.log(Object.assign({ level: enums_1.LogLevel.DEBUG, message }, meta));
    }
    /**
     * Traces logger
     * @access public
     * @param {string} message
     * @param {Record<string, any>} [meta]
     */
    trace(message, meta) {
        this.log(Object.assign({ level: enums_1.LogLevel.TRACE, message }, meta));
    }
}
exports.default = Logger;

"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utility_1 = __importDefault(require("../Utility"));
const enums_1 = require("../enums");
const BaseTarget_1 = __importDefault(require("./Base/BaseTarget"));
/**
 * Console -
 * Target class to set the output target for log
 * @class ConsoleTarget
 * @classdesc This class contain the feature of showing log content on console
 * @extends BaseTarget
 */
class Console extends BaseTarget_1.default {
    /**
     * Console Target
     * @constructor
     */
    constructor(opts) {
        super(opts);
    }
    /**
     * writePayload
     * write the payload data on console
     * @access public
     * @param {LogOptions} payload
     * @param {string} messageKey
     * @returns {void}
     */
    writePayload(payload, messageKey) {
        const colorized = this.getIsColorized();
        const isJsonFormat = this.getIsJsonFormat();
        const isFormatted = this.getIsFormatted();
        const stream = this.getStream();
        let data = '';
        if (isJsonFormat) {
            data = isFormatted ? JSON.stringify(payload, null, 2) : JSON.stringify(payload);
        }
        else {
            const _a = payload, { timestamp, level } = _a, _b = messageKey, message = _a[_b], rest = __rest(_a, ["timestamp", "level", typeof _b === "symbol" ? _b : _b + ""]);
            data = `[${timestamp.toISOString()}] [${enums_1.LogLevel[level]}] ${message}`;
            if (colorized) {
                const color = Utility_1.default.getColor(payload.level);
                data = `${enums_1.ColorCode.CYAN}[${payload.timestamp.toISOString()}]${enums_1.ColorCode.RESET} ${color}[${enums_1.LogLevel[payload.level]}]${enums_1.ColorCode.RESET} ${message}`;
            }
            data += Utility_1.default.objectToLogString(rest);
        }
        stream.write(data === null || data === void 0 ? void 0 : data.trim());
        stream.write('\n');
    }
}
exports.default = Console;

import { TargetOption, LogOptions } from '../types';
import BaseTarget from './Base/BaseTarget';
/**
 * Console -
 * Target class to set the output target for log
 * @class ConsoleTarget
 * @classdesc This class contain the feature of showing log content on console
 * @extends BaseTarget
 */
declare class Console extends BaseTarget {
    /**
     * Console Target
     * @constructor
     */
    constructor(opts: TargetOption);
    /**
     * writePayload
     * write the payload data on console
     * @access public
     * @param {LogOptions} payload
     * @param {string} messageKey
     * @returns {void}
     */
    writePayload(payload: LogOptions, messageKey: string): void;
}
export default Console;

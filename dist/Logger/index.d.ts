import { LoggerOptions } from '../types';
import Logger from './Logger';
/**
 * Get logger instance
 * @param {LoggerOptions} opts
 * @returns {Logger}
 */
declare const getLogger: (opts: LoggerOptions) => Logger;
export { default as Logger } from './Logger';
export default getLogger;

/// <reference types="node" />
import { Writable } from 'stream';
import { LogLabel, LogLevel } from '../enums';
export type PrettyPrintOption = {
    isColorized?: boolean;
    isJson?: boolean;
    isFormatted?: boolean;
};
export type TargetOption = {
    prettyPrintConfig: PrettyPrintOption;
    stream: Writable;
};
export type LogFileOption = {
    fileName: string;
    fileExt?: string;
    maxLogAge?: string;
    logRotateFrequency?: string;
    maxLogFileSize?: string;
    timestampFormat?: string;
} & TargetOption;
export type LogLevelTarget = {
    level: LogLevel;
    target: ITarget;
};
export type TargetMapper = Record<LogLabel, ITarget | undefined>;
export type LoggerOptions = {
    minLevel?: LogLevel;
    messageKey?: string;
    base?: Record<string, any>;
    targets?: LogLevelTarget[];
};
/**
 * ITarget
 * @interface
 */
export interface ITarget {
    stream: Writable;
    getStream(): Writable;
    setStream(stream: Writable): void;
    writePayload(payload: LogOptions, messageKey: string): void;
}
/**
 * LogOptions
 * @interface
 */
export interface LogOptions {
    level: LogLevel;
    [key: string]: any;
}
/**
 * ILogger
 * Interface for logger class
 * @interface
 */
export interface ILogger {
    /**
     * Fatal
     * @public
     * @param {string} message
     * @param {Record<string, any>} meta
     * @returns {void}
     */
    fatal(message: string, meta?: Record<string, any>): void;
    /**
     * Error
     * @public
     * @param {string} message
     * @param {Record<string, any>} meta
     * @returns {void}
     */
    error(message: string, meta?: Record<string, any>): void;
    /**
     * Warning
     * @public
     * @param {string} message
     * @param {Record<string, any>} meta
     * @returns {void}
     */
    warn(message: string, meta?: Record<string, any>): void;
    /**
     * Info
     * @public
     * @param {string} message
     * @param {Record<string, any>} meta
     * @returns {void}
     */
    info(message: string, meta?: Record<string, any>): void;
    /**
     * Debug
     * @public
     * @param {string} message
     * @param {Record<string, any>} meta
     * @returns {void}
     */
    debug(message: string, meta?: Record<string, any>): void;
    /**
     * Trace
     * @public
     * @param {string} message
     * @param {Record<string, any>}meta
     * @returns {void}
     */
    trace(message: string, meta?: Record<string, any>): void;
}

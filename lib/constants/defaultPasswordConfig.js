"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPasswordConfig = void 0;
/**
 * Default configuration for password validation.
 * @type {Config}
 */
exports.defaultPasswordConfig = {
    lowercase: true,
    uppercase: true,
    digits: true,
    specialChars: true,
    minLength: 8,
};

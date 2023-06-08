"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateThreshold = void 0;
/**
 * Calculates the threshold based on the given configuration.
 * @param {Config} config - The configuration object.
 * @returns {number} - The calculated threshold.
 */
const calculateThreshold = (config) => {
    const { lowercase, uppercase, digits, specialChars } = config;
    const trueCount = Number(lowercase) +
        Number(uppercase) +
        Number(digits) +
        Number(specialChars);
    return trueCount + 1 || 5;
};
exports.calculateThreshold = calculateThreshold;

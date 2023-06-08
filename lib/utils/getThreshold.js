"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThreshold = void 0;
const getThreshold = (config) => {
    const { lowercase, uppercase, digits, specialChars } = config;
    const trueCount = Number(lowercase) +
        Number(uppercase) +
        Number(digits) +
        Number(specialChars);
    return trueCount + 1 || 5;
};
exports.getThreshold = getThreshold;

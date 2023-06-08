"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordCriteria = void 0;
/**
 * Array of criteria for password validation.
 * @type {Criterion[]}
 */
exports.passwordCriteria = [
    {
        pattern: /[a-z]/,
        score: 1,
        message: "Lowercase letters",
    },
    {
        pattern: /[A-Z]/,
        score: 1,
        message: "Uppercase letters",
    },
    {
        pattern: /[0-9]/,
        score: 1,
        message: "Digits",
    },
    {
        pattern: /[!@#$%^&*(),.?":{}|<>]/,
        score: 1,
        message: "Special characters",
    },
];

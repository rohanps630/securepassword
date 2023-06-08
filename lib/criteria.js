"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criteria = void 0;
exports.criteria = [
    {
        pattern: /[a-z]/,
        score: 1,
        message: "lowercase letters",
    },
    {
        pattern: /[A-Z]/,
        score: 1,
        message: "uppercase letters",
    },
    {
        pattern: /[0-9]/,
        score: 1,
        message: "digits",
    },
    {
        pattern: /[!@#$%^&*(),.?":{}|<>]/,
        score: 1,
        message: "special characters",
    },
];

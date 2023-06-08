"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const criteria_1 = require("./criteria");
const utils_1 = require("./utils");
/**
 * Calculates the strength of a password based on the given criteria and configuration.
 * @param {string} password - The password to evaluate.
 * @param {Config} config - The configuration for password validation. (optional)
 * @returns {PasswordStrengthResult} - The password strength result.
 */
function calculatePasswordStrength(password, config = constants_1.defaultPasswordConfig) {
    const activeCriteria = [];
    for (const [key, value] of Object.entries(criteria_1.passwordCriteria)) {
        if (config[key]) {
            activeCriteria.push(value);
        }
    }
    if (config.minLength) {
        activeCriteria.push({
            pattern: new RegExp(`.{${config.minLength},}`),
            score: 1,
            message: `Contains at least ${config.minLength} characters`,
        });
    }
    let score = 0;
    const messages = [];
    for (const { pattern, score: criterionScore, message } of activeCriteria) {
        if (!pattern.test(password)) {
            messages.push(`Does not contain ${message}`);
        }
        else {
            score += criterionScore;
        }
    }
    const threshold = (0, utils_1.calculateThreshold)(config);
    let strength;
    if (score >= threshold) {
        strength = "Strong";
    }
    else if (score >= threshold / 2) {
        strength = "Moderate";
    }
    else {
        strength = "Weak";
    }
    return { messages, strength };
}
exports.default = calculatePasswordStrength;

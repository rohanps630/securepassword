import { Config, PasswordStrengthResult } from "./@types";
/**
 * Calculates the strength of a password based on the given criteria and configuration.
 * @param {string} password - The password to evaluate.
 * @param {Config} config - The configuration for password validation. (optional)
 * @returns {PasswordStrengthResult} - The password strength result.
 */
declare function calculatePasswordStrength(password: string, config?: Config): PasswordStrengthResult;
export default calculatePasswordStrength;

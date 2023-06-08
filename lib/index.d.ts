import { Config } from "./@types";
/**
 * Calculates the strength of a password based on the given criteria and configuration.
 * @param {string} password - The password to evaluate.
 * @param {Config} config - The configuration for password validation. (optional)
 * @returns {PasswordStrengthResult} - The password strength result.
 */
export declare function calculatePasswordStrength(password: string, config?: Config): any;

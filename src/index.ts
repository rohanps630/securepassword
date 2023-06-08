import { Config, Criterion, PasswordStrengthResult } from "./@types";
import { defaultPasswordConfig } from "./constants";
import { passwordCriteria } from "./criteria";
import { calculateThreshold } from "./utils";

/**
 * Calculates the strength of a password based on the given criteria and configuration.
 * @param {string} password - The password to evaluate.
 * @param {Config} config - The configuration for password validation. (optional)
 * @returns {PasswordStrengthResult} - The password strength result.
 */
function calculatePasswordStrength(
  password: string,
  config: Config = defaultPasswordConfig
): PasswordStrengthResult {
  const activeCriteria: Criterion[] = [];

  for (const [key, value] of Object.entries(passwordCriteria)) {
    if (config[key as keyof Config]) {
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
  const messages: string[] = [];

  for (const { pattern, score: criterionScore, message } of activeCriteria) {
    if (!pattern.test(password)) {
      messages.push(`Does not contain ${message}`);
    } else {
      score += criterionScore;
    }
  }

  const threshold = calculateThreshold(config);

  let strength: "Weak" | "Moderate" | "Strong";

  if (score >= threshold) {
    strength = "Strong";
  } else if (score >= threshold / 2) {
    strength = "Moderate";
  } else {
    strength = "Weak";
  }

  return { messages, strength };
}

export default calculatePasswordStrength;

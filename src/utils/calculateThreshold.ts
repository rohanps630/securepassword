import { Config } from "../@types";

/**
 * Calculates the threshold based on the given configuration.
 * @param {Config} config - The configuration object.
 * @returns {number} - The calculated threshold.
 */
export const calculateThreshold = (config: Config): number => {
  const { lowercase, uppercase, digits, specialChars } = config;
  const trueCount =
    Number(lowercase) +
    Number(uppercase) +
    Number(digits) +
    Number(specialChars);
  return trueCount + 1 || 5;
};

import { Config } from "../@types";

/**
 * Default configuration for password validation.
 * @type {Config}
 */
export const defaultPasswordConfig: Config = {
  lowercase: true,
  uppercase: true,
  digits: true,
  specialChars: true,
  minLength: 8,
};

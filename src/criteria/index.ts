import { Criterion } from "../@types";

/**
 * Array of criteria for password validation.
 * @type {Criterion[]}
 */
export const passwordCriteria: Criterion[] = [
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

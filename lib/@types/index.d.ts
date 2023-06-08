export interface Config {
    lowercase: boolean;
    uppercase: boolean;
    digits: boolean;
    specialChars: boolean;
    minLength: number;
}
export interface Criterion {
    pattern: RegExp;
    score: number;
    message: string;
}
export interface PasswordStrengthResult {
    messages: string[];
    strength: "Weak" | "Moderate" | "Strong";
}

# Secure Password

Secure Password is a password strength assessment tool that allows users to evaluate the robustness of their passwords. It analyzes passwords based on customizable criteria such as lowercase letters, uppercase letters, digits, special characters, and minimum length. The tool provides detailed feedback on the strength of the password, helping users create stronger passwords for enhanced security.

## Features

- Assess password strength based on configurable criteria.
- Customizable criteria include lowercase letters, uppercase letters, digits, special characters, and minimum length.
- Generate detailed feedback on password strength, indicating whether it is weak, moderate, or strong.
- Empower users to create more secure passwords and protect sensitive data.

## Installation

To install Secure Password, follow these steps:

1. Clone the repository: `git clone https://github.com/rohanps630/securepassword.git`
2. Navigate to the project directory: `cd securepassword`
3. Install dependencies: `npm install`

## Usage

1. Import the necessary modules into your project.
2. Configure the password strength criteria and options.
3. Call the `calculatePasswordStrength` function, passing in the password and configuration as arguments.
4. Receive the password strength result, which includes messages and the strength level.

Here's an example of how to use Secure Password in your code:

```typescript
import { calculatePasswordStrength, defaultPasswordConfig } from '@rps/securepassword';

const password = 'MySecurePassword123';
const config = { ...defaultPasswordConfig }; // Customize the configuration if needed

const result = calculatePasswordStrength(password, config);
console.log(result);
```

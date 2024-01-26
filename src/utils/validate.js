import { auth } from "./firebase.config";

const passwordRequirements = {
  minLength: 8,
  requiresUppercase: true,
  requiresLowercase: true,
  requiresNumber: true,
  requiresSpecialChar: true,

  displayMessage: function () {
    let message = `Password Requirements:\n`;
    message += `- Minimum ${this.minLength} characters\n`;

    if (this.requiresUppercase) {
      message += `- At least 1 uppercase letter (A-Z)\n`;
    }
    if (this.requiresLowercase) {
      message += `- At least 1 lowercase letter (a-z)\n`;
    }
    if (this.requiresNumber) {
      message += `- At least 1 number (0-9)\n`;
    }
    if (this.requiresSpecialChar) {
      message += `- At least 1 special character (!, @, #, $, etc.)\n`;
    }
    return message;
  },
};

export const checkValidData = (email, password, isSignInForm) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // Example usage:
  const passwordMessage = passwordRequirements.displayMessage();
  let errors = {};

  if (!isEmailValid) {
    errors = {
      ...errors,
      emailError: "Invalid Email. Please enter a valid email.",
    };
  }
  if (!isPasswordValid) {
    errors = {
      ...errors,
      passwordError: isSignInForm
        ? "Invalid Password. Please enter a valid password."
        : passwordRequirements.displayMessage(),
    };
  }

  return !isEmailValid || !isPasswordValid ? errors : null;
};

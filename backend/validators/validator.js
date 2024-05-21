import validator from "validator";

export const validateEmail = (email) => {
  return validator.isEmail(email);
}

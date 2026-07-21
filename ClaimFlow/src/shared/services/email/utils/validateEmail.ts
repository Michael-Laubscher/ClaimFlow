import validator from "validator";

export function validateEmail(email: string) {
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email address");
  }
}

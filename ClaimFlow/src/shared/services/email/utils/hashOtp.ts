import bcrypt from "bcrypt";

export async function hashOtp(otp: string) {
  return bcrypt.hash(otp, 10);
}

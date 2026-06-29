import bcrypt from "bcrypt";
import { randomInt } from "node:crypto";

export class OtpService {
  generate(length = 6): string {
    const min = 10 ** (length - 1);
    const max = 10 ** length;

    return randomInt(min, max).toString();
  }

  async hash(otp: string): Promise<string> {
    return bcrypt.hash(otp, 10);
  }

  async verify(otp: string, hash: string): Promise<boolean> {
    return bcrypt.compare(otp, hash);
  }

  createExpiry(minutes = 10): Date {
    return new Date(Date.now() + minutes * 60 * 1000);
  }

  isExpired(expiresAt: Date): boolean {
    return expiresAt.getTime() < Date.now();
  }
}

import type { EmailJob } from "../types/EmailJob";
import { emailQueue } from "./EmailQueue";

export async function queueEmail(job: EmailJob) {
  await emailQueue.add(job.type, job, {
    attempts: 5,

    backoff: {
      type: "exponential",
      delay: 5000,
    },
  });
}

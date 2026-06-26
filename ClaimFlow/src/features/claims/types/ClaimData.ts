import type { Attachment } from "./Attachment.types";

export type ClaimData = {
  step1: Record<string, unknown>;

  step2: Record<string, unknown>;

  driver: Record<string, unknown>;

  vehicle: Record<string, unknown>;

  thirdParty: Record<string, unknown>;

  evidence: {
    witnesses: {
      name: string;
      phone: string;
    }[];

    evidenceNotes?: string;

    attachments: Attachment[];
  };

  assessment: Record<string, unknown>;

  declaration: Record<string, unknown>;
};

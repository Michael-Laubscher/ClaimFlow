import type { Attachment } from "@/features/claims/types/Attachment.types";
import { claimsDB } from "@/mock/data/claims";

const API_MODE = "mock";

/**
 * Shared request type
 */
export type Claim = {
  claimantName: string;
  description: string;
  attachments: Attachment[];
  zip?: Blob;
};

/**
 * Shared API response type
 */
export type ApiResponse<T> = {
  success: boolean;
  data: T;
};

/**
 * -------------------------
 * ROUTER (centralized URL logic)
 * -------------------------
 */
const routes = {
  claims: "/claims",
} as const;

function assertRoute(url: string) {
  if (url !== routes.claims) {
    throw new Error(`Unknown endpoint: ${url}`);
  }
}

/**
 * -------------------------
 * MOCK API IMPLEMENTATION
 * -------------------------
 */
const mockApi = {
  post: async <T>(url: string, data: Claim): Promise<ApiResponse<T>> => {
    assertRoute(url);

    const newClaim = {
      id: Date.now(),
      ...data,
      createdAt: new Date(),
    };

    claimsDB.push(newClaim);

    return {
      success: true,
      data: newClaim as T,
    };
  },
};

/**
 * -------------------------
 * REAL API IMPLEMENTATION (future)
 * -------------------------
 */
const realApi = {
  post: async <T>(url: string, data: Claim): Promise<ApiResponse<T>> => {
    assertRoute(url);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    return (await res.json()) as ApiResponse<T>;
  },
};

/**
 * -------------------------
 * API CLIENT EXPORT
 * -------------------------
 */
export const apiClient = API_MODE === "mock" ? mockApi : realApi;

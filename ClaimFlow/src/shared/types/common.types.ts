export type ApiMode = "mock" | "real";

export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

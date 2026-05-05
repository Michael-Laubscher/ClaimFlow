import { create } from "zustand";

interface AppState {
  loading: boolean;
  error: string | null;

  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  loading: false,
  error: null,

  setLoading: (value) => set({ loading: value }),
  setError: (value) => set({ error: value }),
}));
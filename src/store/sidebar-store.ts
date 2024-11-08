import { create } from 'zustand';

export interface State {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const useSidebarStore = create<State>()((set) => ({
  isOpen: true,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

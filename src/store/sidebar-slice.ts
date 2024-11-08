import { StateCreator } from 'zustand';

export interface SidebarSlice {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const createSidebarSlice: StateCreator<SidebarSlice> = (set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
});

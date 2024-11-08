import { create } from 'zustand';

type Store = {
  selectedFolder: string | null;
  setSelectedFolder: (folder: string | null) => void;
};

export const useTreeViewStore = create<Store>((set) => ({
  selectedFolder: null,
  setSelectedFolder: (folder) => set({ selectedFolder: folder }),
}));

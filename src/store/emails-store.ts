import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { requests } from '../api/config/config';
import { TreeNode } from '../components/tree-view/tree-view';
import { TEmailCategory, TEmailType } from '../types/emails';

export interface State {
  isLoading: boolean;
  selectedAccount: string | null;
  selectedFolder: TEmailCategory;
  allFolders: TreeNode[];
  favoriteFolders: TreeNode[];
  setIsLoading: (isLoading: boolean) => void;
  setSelectedAccount: (account: string | null) => void;
  setSelectedFolder: (folder: TEmailCategory) => void;
  setAllFolders: (folders: TreeNode[]) => void;
  setFavoriteFolders: (folders: TreeNode[]) => void;
  getFolders: (emailType: TEmailType) => TreeNode[];
  initFolders: (emailType: TEmailType) => Promise<void>;
}

export const useEmailsStore = create<State>()(
  persist(
    (set, get) => ({
      isLoading: false,
      selectedAccount: null,
      selectedFolder: 'inbox',
      allFolders: [],
      favoriteFolders: [],
      setIsLoading: (isLoading) => set({ isLoading }),
      setSelectedAccount: (account) => set({ selectedAccount: account }),
      setSelectedFolder: (folder) => set({ selectedFolder: folder }),
      setAllFolders: (folders) => set({ allFolders: folders }),
      setFavoriteFolders: (folders) => set({ favoriteFolders: folders }),

      getFolders: (emailType) => {
        return emailType === 'favorites'
          ? get().favoriteFolders
          : get().allFolders;
      },

      initFolders: async (emailType) => {
        const currentFolders = get().getFolders(emailType);
        if (currentFolders.length > 0 || get().isLoading) return;

        try {
          set({ isLoading: true });
          const requestFn =
            emailType === 'favorites'
              ? requests.getFavoriteEmailBoxes
              : requests.getEmailBoxes;

          const folders = await requestFn();

          set({
            isLoading: false,
            ...(emailType === 'favorites'
              ? { favoriteFolders: folders }
              : { allFolders: folders }),
          });
        } catch (error) {
          set({ isLoading: false });
          console.error('Error fetching folders:', error);
        }
      },
    }),
    {
      name: 'emails-store',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        allFolders: state.allFolders,
        favoriteFolders: state.favoriteFolders,
      }),
    }
  )
);

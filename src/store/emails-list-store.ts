import { create } from 'zustand';

import { TEmailListItem } from '../types/emails';

export interface State {
  emailsList: TEmailListItem[];
  isLoading: boolean;
  setEmailsList: (emailsList: TEmailListItem[]) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useEmailsListStore = create<State>()((set) => ({
  emailsList: [],
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setEmailsList: (emailsList: TEmailListItem[]) =>
    set({ emailsList, isLoading: false }),
}));

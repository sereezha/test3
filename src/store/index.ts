import { create } from 'zustand';

import { createSidebarSlice, type SidebarSlice } from './sidebar-slice';

export const useBoundStore = create<SidebarSlice>()((...a) => ({
  ...createSidebarSlice(...a),
}));

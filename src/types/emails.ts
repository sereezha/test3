export type TEmailBox = {
  name: string;
  date: string;
  isFavorite?: boolean;
};

export type TEmailCategory = 'inbox' | 'outbox';

export type TEmailType = 'all' | 'favorites';

export type TEmailListItem = {
  id: string;
  title: string;
  description: string;
  date: string;
};

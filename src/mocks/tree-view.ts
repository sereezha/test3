import { TreeNode } from '../components/tree-view/tree-view';
import { TEmailBox } from '../types/emails';
import { generateArrayWith } from '../utils/generic';

export const emailBoxes: TEmailBox[] = [
  ...generateArrayWith(1600, (index) => ({
    name: `test${index === 2 ? 'fdsafasfas' : index}@gmail.com`,
    date: new Date(
      Math.max(
        new Date('2024-01-01').getTime(),
        new Date().getTime() -
          index * (24 * 60 * 60 * 1000) -
          Math.floor(Math.random() * (24 * 60 * 60 * 1000))
      )
    ).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    isFavorite: index === 1 || index === 5 || index === 10,
  })),
];

export const favoriteEmailBoxes = emailBoxes.filter(
  (emailBox) => emailBox.isFavorite
);

export const transformEmailBoxesResponse = (
  emailBoxes: TEmailBox[]
): TreeNode[] => {
  return emailBoxes.map((emailBox) => ({
    ...emailBox,
    id: emailBox.name,
    key: emailBox.name,
    isDroppable: false,
    children: [
      {
        id: `inbox-${emailBox.name}`,
        key: `inbox`,
        name: 'Inbox',
        isDroppable: false,
      },
      {
        id: `outbox-${emailBox.name}`,
        key: `outbox`,
        name: 'Outbox',
        isDroppable: false,
      },
    ],
  }));
};

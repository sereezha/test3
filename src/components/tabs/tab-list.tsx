import { List as RadixTabList, TabsListProps } from '@radix-ui/react-tabs';

import styles from './tabs.module.scss';

export type TabTheme = 'blue' | 'red';

interface Props extends TabsListProps {
  theme?: TabTheme;
}

const TabList = ({ theme, ...props }: Props) => (
  <RadixTabList
    {...props}
    className={styles.tabList}
  />
);

TabList.tabsRole = 'TabList';

export default TabList;

import { TabsTriggerProps, Trigger as RadixTab } from '@radix-ui/react-tabs';

import styles from './tabs.module.scss';

export type TabTheme = 'blue' | 'red';

interface Props extends TabsTriggerProps {
  theme?: TabTheme;
}

const Tab = ({ theme, ...props }: Props) => (
  <RadixTab
    {...props}
    className={styles.tab}
  />
);

Tab.tabsRole = 'Tab';

export default Tab;

import { useState } from 'react';
import { Content as TabPanel, Root as RadixTabs } from '@radix-ui/react-tabs';

import Tab from './tab';
import TabList from './tab-list';

import styles from './tabs.module.scss';

export type TabsTheme = 'gray' | 'white';
export type TabsSize = 'mini' | 'small' | 'medium';
export type TabsCursor = 'default' | 'pointer';
export type TabsContentWeight = 500 | 700;

export interface TabProps {
  theme?: TabsTheme;
  defaultValue?: string;
  children: React.ReactNode;
  size?: TabsSize;
  cursor?: TabsCursor;
  selectedValue?: string;
  onChange?: (value: string) => void;
}

const Tabs = ({
  onChange,
  children,
  defaultValue = '0',
  selectedValue,
}: TabProps) => {
  const [selectedTabValue, setSelectedTabValue] = useState(defaultValue);
  const isControlled = selectedValue !== undefined;
  const handleChange = (value: string) => {
    if (!isControlled) {
      setSelectedTabValue(value);
    }

    onChange && onChange(value);
  };

  const index = isControlled ? selectedValue : selectedTabValue;

  return (
    <div>
      <RadixTabs
        className={styles.tabsContainer}
        value={index}
        onValueChange={handleChange}>
        {children}
      </RadixTabs>
    </div>
  );
};

export { Tab, TabList, TabPanel, Tabs };

{
  /* <RadixTabs.Root
defaultValue='tab1'
orientation='vertical'>
<RadixTabs.List aria-label='tabs example'>
  <RadixTabs.Trigger value='tab1'>One</RadixTabs.Trigger>
  <RadixTabs.Trigger value='tab2'>Two</RadixTabs.Trigger>
  <RadixTabs.Trigger value='tab3'>Three</RadixTabs.Trigger>
</RadixTabs.List>
<RadixTabs.Content value='tab1'>Tab one content</RadixTabs.Content>
<RadixTabs.Content value='tab2'>Tab two content</RadixTabs.Content>
<RadixTabs.Content value='tab3'>Tab three content</RadixTabs.Content>
</RadixTabs.Root> */
}

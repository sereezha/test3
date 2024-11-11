import { Outlet } from '@tanstack/react-router';

import Card from '../../components/card/card';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import { useSidebarStore } from '../../store/sidebar-store';

import styles from './main-layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children = <Outlet /> }: Props) => {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div
        className={styles.container}
        style={{
          gridTemplateColumns: isOpen ? 'var(--sidebar-width) 1fr' : '0 1fr',
        }}>
        <Sidebar />
        <Card className={styles.content}>{children}</Card>
      </div>
    </div>
  );
};

export default MainLayout;

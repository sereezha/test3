import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import { useSidebarStore } from '../../store/sidebar-store';
import { TEmailType } from '../../types/emails';

import styles from './main-layout.module.scss';

type Props = {
  children: React.ReactNode;
  emailType?: TEmailType;
};

const MainLayout = ({ children }: Props) => {
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
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

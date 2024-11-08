import { useSidebarStore } from '../../store/sidebar-store';
import BurgerButton from '../burger-button/burger-button';

import styles from './header.module.scss';

const Header = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggleOpen = useSidebarStore((state) => state.toggleOpen);
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <BurgerButton
          aria-controls='main-sidebar'
          aria-expanded={isOpen}
          isActive={isOpen}
          onClick={toggleOpen}
        />
        <h2>Email viewer</h2>
      </div>
    </header>
  );
};

export default Header;

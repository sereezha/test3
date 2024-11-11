import { useSidebarStore } from '../../store/sidebar-store';
import BurgerButton from '../burger-button/burger-button';

import HeaderLeft from './components/header-left';
import HeaderLogo from './components/header-logo';
import HeaderRight from './components/header-right';
import HeaderThemeToggle from './components/header-theme-toggle';
import BaseHeader from './base-header';

const Header = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggleOpen = useSidebarStore((state) => state.toggleOpen);
  return (
    <BaseHeader>
      <HeaderLeft>
        <BurgerButton
          aria-controls='main-sidebar'
          aria-expanded={isOpen}
          isActive={isOpen}
          onClick={toggleOpen}
        />
        <HeaderLogo />
      </HeaderLeft>
      <HeaderRight>
        <HeaderThemeToggle />
      </HeaderRight>
    </BaseHeader>
  );
};

export default Header;

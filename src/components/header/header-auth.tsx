import HeaderLeft from './components/header-left';
import HeaderLogo from './components/header-logo';
import HeaderRight from './components/header-right';
import HeaderThemeToggle from './components/header-theme-toggle';
import BaseHeader from './base-header';

const HeaderAuth = () => {
  return (
    <BaseHeader>
      <HeaderLeft>
        <HeaderLogo />
      </HeaderLeft>
      <HeaderRight>
        <HeaderThemeToggle />
      </HeaderRight>
    </BaseHeader>
  );
};

export default HeaderAuth;

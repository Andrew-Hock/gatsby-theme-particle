import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderMenuButton,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'particle-components-react';
import { Switcher20, Close20 } from '@particle/icons-react';
import cx from 'classnames';

import HeaderNav from '../HeaderNav/HeaderNav';
import GlobalSearch from '../GlobalSearch';
import NavContext from '../../util/context/NavContext';
import useMetadata from '../../util/hooks/useMetadata';

import {
  header,
  switcherButtonOpen,
  skipToContent,
  headerName,
  collapsed,
  headerButton,
  switcherButton,
} from './Header.module.scss';

const Header = ({ children }) => {
  const {
    leftNavIsOpen,
    toggleNavState,
    switcherIsOpen,
    searchIsOpen,
  } = useContext(NavContext);
  const { isSearchEnabled, navigationStyle } = useMetadata();

  return (
    <ShellHeader aria-label="Header" className={header}>
      <SkipToContent href="#main-content" className={skipToContent} />
      <HeaderMenuButton
        className={cx('bx--header__action--menu', headerButton)}
        aria-label="Open menu"
        onClick={() => {
          toggleNavState('leftNavIsOpen');
          toggleNavState('switcherIsOpen', 'close');
        }}
        isActive={leftNavIsOpen}
      />
      <Link
        className={cx(headerName, {
          [collapsed]: searchIsOpen,
        })}
        to="/">
        {children}
      </Link>
      {navigationStyle && <HeaderNav />}
      <HeaderGlobalBar>
        {isSearchEnabled && <GlobalSearch />}
        <HeaderGlobalAction
          className={cx(headerButton, switcherButton, {
            [switcherButtonOpen]: switcherIsOpen,
          })}
          aria-label="Switch"
          onClick={() => {
            toggleNavState('switcherIsOpen');
            toggleNavState('searchIsOpen', 'close');
            toggleNavState('leftNavIsOpen', 'close');
          }}>
          {switcherIsOpen ? <Close20 /> : <Switcher20 />}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </ShellHeader>
  );
};

const DefaultHeaderText = () => (
  <>
    Particle&nbsp;<span>Design System</span>
  </>
);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;

import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

export const MenuContext = createContext({});

export const Layout = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const toggleMenuMode = () => {
    toggleMenu(!isMenuOpen);
    console.log(isMenuOpen ? 'Menu is closed' : 'Menu is open');
  };

  const closeMenu = () => {
    toggleMenu(false);
    console.log(isMenuOpen ? 'Menu is closed' : 'Menu is open');
  };

  return (
    <MenuContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ isMenuOpenContext: isMenuOpen, toggleMenuMode: () => toggleMenuMode(), closeMenu: () => closeMenu() }}
    >
      <div className='wrapper'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </MenuContext.Provider>
  );
};

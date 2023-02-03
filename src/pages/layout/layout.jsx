import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

export const MenuContext = createContext({});

export const Layout = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
    console.log(isMenuOpen ? 'Menu is closed' : 'Menu is open');
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MenuContext.Provider value={{ isMenuOpenContext: isMenuOpen, toggleMenuMode: () => toggleMenuMode() }}>
      <div className='wrapper'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </MenuContext.Provider>
  );
};

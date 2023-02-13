import { createContext, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import * as animationData from '../../components/loader/loader.json';
import { getBooks, getBooksCategories } from '../../redux/reducers/books-reducer';

export const MenuContext = createContext({});

export const Layout = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const loading = useSelector((state) => state.books.loading);
  const loadingCategories = useSelector((state) => state.books.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getBooksCategories());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const books = useSelector((state) => state.books.books);

  console.log('BOOKS FROM STORE', books);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
    console.log(isMenuOpen ? 'Menu is closed' : 'Menu is open');
  }

  function closeMenu() {
    toggleMenu(false);
    console.log(isMenuOpen ? 'Menu is closed' : 'Menu is open');
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  if (loading || loadingCategories) {
    return (
      <div className='loader' data-test-id='loader'>
        <Lottie options={defaultOptions} width={150} height={150} />
      </div>
    );
  }

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

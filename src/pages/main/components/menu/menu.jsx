import { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { MenuContext } from '../../../layout/layout';

import { MenuGenre } from './components/menu-genre/menu-genre';
import { menugenreDB } from './menugenre-db';

import './menu.css';

export const Menu = () => {
  const [isBookMenuShown, setIsBookMenuShown] = useState(false);

  const toggleBookMenu = () => {
    setIsBookMenuShown(!isBookMenuShown);
    document.getElementById('submenu').classList.toggle('hide');
    console.log(isBookMenuShown);
  };

  const { isMenuOpenContext } = useContext(MenuContext);
  const menuElements = menugenreDB.map(({ genre, amount, id }) => <MenuGenre genre={genre} amount={amount} id={id} />);

  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className={classNames('menu', { menuOpen: isMenuOpenContext })} data-test-id='burger-navigation'>
      <div className='menu-item'>
        <NavLink
          to='/books/all'
          className={location.pathname.includes('books') ? 'menu-item-active' : null}
          data-test-id='burger-showcase'
        >
          <button
            type='button'
            className='menu-header'
            onClick={() => {
              toggleBookMenu();
            }}
            id='books'
            data-test-id='navigation-showcase'
          >
            Витрина книг
          </button>
          <ul className={classNames('submenu', { hide: isBookMenuShown })} id='submenu'>
            <NavLink
              to='/books/all'
              className={({ isActive }) => (isActive ? 'submenu-active' : null)}
              data-test-id='burger-books'
            >
              <button type='button' className='submenu-all' data-test-id='navigation-books'>
                Все книги
              </button>
            </NavLink>
            {menuElements}
          </ul>
        </NavLink>
      </div>
      <div className='menu-item'>
        <NavLink
          to='/terms'
          className={({ isActive }) => (isActive ? 'menu-item-active' : null)}
          data-test-id='burger-terms'
        >
          <button type='button' className='menu-header' id='terms' data-test-id='navigation-terms'>
            Правила пользования
          </button>
        </NavLink>
      </div>
      <div className='menu-item'>
        <NavLink
          to='/contract'
          className={({ isActive }) => (isActive ? 'menu-item-active' : null)}
          data-test-id='burger-contract'
        >
          <button type='button' className='menu-header' id='contract' data-test-id='navigation-contract'>
            Договор оферты
          </button>
        </NavLink>
      </div>
    </div>
  );
};

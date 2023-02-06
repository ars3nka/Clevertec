import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { MenuContext } from '../../../layout/layout';

import { MenuGenre } from './components/menu-genre/menu-genre';
import { menugenreDB } from './menugenre-db';

import './menu.css';

export const Menu = () => {
  const [isBookMenuShown, setIsBookMenuShown] = useState(false);
  const [isBooksMenu, setIsBooksMenu] = useState(true);
  const [isTermsMenu, setIsTermsMenu] = useState(false);
  const [isContractMenu, setIsContractMenu] = useState(false);

  const handleToggleMenu = (event) => {
    console.log(event.target.id);
    switch (event.target.id) {
      case 'books':
        setIsBooksMenu(true);
        setIsTermsMenu(false);
        setIsContractMenu(false);
        break;
      case 'terms':
        setIsTermsMenu(true);
        setIsBooksMenu(false);
        setIsBookMenuShown(true);
        setIsContractMenu(false);
        break;
      case 'contract':
        setIsContractMenu(true);
        setIsBooksMenu(false);
        setIsBookMenuShown(true);
        setIsTermsMenu(false);
        break;
    }
    sessionStorage.setItem('menu', JSON.stringify({ isBooksMenu, isTermsMenu, isContractMenu }));
  };

  const toggleBookMenu = () => {
    console.log('toggleBookMenu');
    if (isBooksMenu) {
      setIsBookMenuShown(!isBookMenuShown);
    }
  };

  const { isMenuOpenContext } = useContext(MenuContext);
  const menuElements = menugenreDB.map(({ genre, amount, id }) => <MenuGenre genre={genre} amount={amount} id={id} />);

  console.log('isBooksMenu', isBooksMenu);
  console.log('isTermsMenu', isTermsMenu);
  console.log('isContractMenu', isContractMenu);

  console.log(sessionStorage.getItem('menu'));

  return (
    <div className={classNames('menu', { menuOpen: isMenuOpenContext })} data-test-id='burger-navigation'>
      <div className={classNames('menu-item', { menuItemActive: isBooksMenu })}>
        <NavLink to='/'>
          <button
            type='button'
            className='menu-header'
            onClick={(event) => {
              toggleBookMenu();
              handleToggleMenu(event);
            }}
            id='books'
          >
            Витрина книг
          </button>
        </NavLink>
        <div className={classNames('line', { hide: !isBooksMenu })} />
        <ul className={classNames('submenu', { hide: isBookMenuShown })}>
          <button type='button' className='submenu-all'>
            Все книги
          </button>
          {menuElements}
        </ul>
      </div>
      <NavLink to='/terms'>
        <div className={classNames('menu-item', { menuItemActive: isTermsMenu })}>
          <button
            type='button'
            className='menu-header'
            onClick={(event) => {
              handleToggleMenu(event);
            }}
            id='terms'
          >
            Правила пользования
          </button>

          <div className={classNames('line', { hide: !isTermsMenu })} />
        </div>
      </NavLink>
      <div className={classNames('menu-item', { menuItemActive: isContractMenu })}>
        <NavLink to='/contract'>
          <button
            type='button'
            className='menu-header'
            onClick={(event) => {
              handleToggleMenu(event);
            }}
            id='contract'
          >
            Договор оферты
          </button>
        </NavLink>
        <div className={classNames('line', { hide: !isContractMenu })} />
      </div>
    </div>
  );
};

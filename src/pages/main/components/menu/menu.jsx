import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { MenuContext } from '../../../layout/layout';

import { MenuGenre } from './components/menu-genre/menu-genre';
import { menugenreDB } from './menugenre-db';

import './menu.css';

export const Menu = () => {
  const { isMenuOpenContext, toggleMenuMode } = useContext(MenuContext);
  const menuElements = menugenreDB.map(({ genre, amount }) => <MenuGenre genre={genre} amount={amount} />);

  return (
    <div className={classNames('menu', { menuOpen: isMenuOpenContext })}>
      <div className='menu-item menu-item-active'>
        <NavLink to='/'>
          <button type='button' className='menu-header'>
            Витрина книг
          </button>
        </NavLink>
        <div className='line' />
        <ul className='submenu'>
          <button type='button' className='submenu-all'>
            Все книги
          </button>
          {menuElements}
        </ul>
      </div>
      <div className='menu-item'>
        <button type='button' className='menu-header'>
          <NavLink to='/terms'>Правила пользования</NavLink>
        </button>
      </div>
      <div className='menu-item'>
        <button type='button' className='menu-header'>
          <NavLink to='/contract'>Договор оферты</NavLink>
        </button>
      </div>
    </div>
  );
};

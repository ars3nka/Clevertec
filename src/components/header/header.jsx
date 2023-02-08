import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { MenuContext } from '../../pages/layout/layout';
import { Menu } from '../../pages/main/components/menu/menu';

import userImg from './img/avatar.png';
import logo from './img/logo.svg';

import './header.css';

export const Header = () => {
  const userName = 'Иван';

  const { isMenuOpenContext, toggleMenuMode } = useContext(MenuContext);

  return (
    <section className='header-section'>
      <header>
        <div className='header'>
          <div className='header-logo'>
            <NavLink to='/'>
              <img src={logo} alt='Cleverland Logo' />
            </NavLink>
          </div>
          <div className='header-burger'>
            <button
              type='button'
              onClick={toggleMenuMode}
              data-test-id='button-burger'
              className='header-burger-button'
            >
              <span className={classNames('header-burger-line', { active: isMenuOpenContext })}>
                <svg width='28' height='4' viewBox='0 0 28 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.666656 1.99984C0.666656 1.26346 1.26361 0.666504 1.99999 0.666504H26C26.7364 0.666504 27.3333 1.26346 27.3333 1.99984C27.3333 2.73622 26.7364 3.33317 26 3.33317H1.99999C1.26361 3.33317 0.666656 2.73622 0.666656 1.99984Z'
                    fill='#363636'
                  />
                </svg>
              </span>
              <span className={classNames('header-burger-line', { hide: isMenuOpenContext })}>
                <svg width='28' height='4' viewBox='0 0 28 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.666656 1.99984C0.666656 1.26346 1.26361 0.666504 1.99999 0.666504H26C26.7364 0.666504 27.3333 1.26346 27.3333 1.99984C27.3333 2.73622 26.7364 3.33317 26 3.33317H1.99999C1.26361 3.33317 0.666656 2.73622 0.666656 1.99984Z'
                    fill='#363636'
                  />
                </svg>
              </span>
              <span className={classNames('header-burger-line', { active: isMenuOpenContext })}>
                <svg width='28' height='4' viewBox='0 0 28 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.666656 1.99984C0.666656 1.26346 1.26361 0.666504 1.99999 0.666504H26C26.7364 0.666504 27.3333 1.26346 27.3333 1.99984C27.3333 2.73622 26.7364 3.33317 26 3.33317H1.99999C1.26361 3.33317 0.666656 2.73622 0.666656 1.99984Z'
                    fill='#363636'
                  />
                </svg>
              </span>
            </button>
          </div>
          <h1>Библиотека</h1>
          <div className='header-user'>
            <div>Привет, {userName}</div>
            <img src={userImg} alt='User' />
          </div>
        </div>
        {window.innerWidth <= 1200 ? <Menu /> : null}
      </header>
    </section>
  );
};

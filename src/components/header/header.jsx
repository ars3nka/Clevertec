import { NavLink } from 'react-router-dom';

import userImg from './img/avatar.png';
import burgerImg from './img/burger.svg';
import logo from './img/logo.svg';

import './header.css';

export const Header = () => {
  const userName = 'Иван';

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
            <button type='button'>
              <img src={burgerImg} alt='Menu' />
            </button>
          </div>
          <h1>Библиотека</h1>
          <div className='header-user'>
            <div>Привет, {userName}</div>
            <img src={userImg} alt='User' />
          </div>
        </div>
      </header>
    </section>
  );
};

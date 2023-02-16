import { NavLink } from 'react-router-dom';

import './menu-genre.css';

export const MenuGenre = ({ name, path, id }) => (
  <NavLink to={`/books/${path}`} className={({ isActive }) => (isActive ? 'menu-genre-active' : null)}>
    <li className='menu-genre'>
      <button type='button'>
        <div className='menu-genre-genre'>
          {/* <p className='menu-genre-genre-genre'>{props.genre} </p> */}
          {name}
          {/* <p className='menu-genre-amount'>22</p> */}
        </div>
      </button>
    </li>
  </NavLink>
);

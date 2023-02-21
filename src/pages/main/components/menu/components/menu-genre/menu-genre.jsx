import { NavLink } from 'react-router-dom';

import './menu-genre.css';

export const MenuGenre = ({ name, path, id, test }) => (
  <NavLink
    to={`/books/${path}`}
    className={({ isActive }) => (isActive ? 'menu-genre-active' : null)}
    data-test-id={`${test}-${path}`}
  >
    <li className='menu-genre'>
      <button type='button'>
        <div className='menu-genre-genre'>
          {name}
          {/* <p className='menu-genre-amount' data-test-id={`${test}-book-count-for-${path}`}>
            22
          </p> */}
        </div>
      </button>
    </li>
  </NavLink>
);

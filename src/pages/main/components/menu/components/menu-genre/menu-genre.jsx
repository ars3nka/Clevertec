import { NavLink } from 'react-router-dom';

import './menu-genre.css';

export const MenuGenre = ({ genre, amount, id }) => (
  <NavLink to={id}>
    <li className='menu-genre'>
      <button type='button'>
        <div className='menu-genre-genre'>
          {/* <p className='menu-genre-genre-genre'>{props.genre} </p> */}
          {genre}
          <p className='menu-genre-amount'>{amount}</p>
        </div>
      </button>
    </li>
  </NavLink>
);

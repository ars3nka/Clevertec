import './menu-genre.css';

export const MenuGenre = (props) => (
  <li className='menu-genre'>
    <button type='button'>
      <div className='menu-genre-genre'>
        {/* <p className='menu-genre-genre-genre'>{props.genre} </p> */}
        {props.genre}
        <p className='menu-genre-amount'>{props.amount}</p>
      </div>
    </button>
  </li>
);

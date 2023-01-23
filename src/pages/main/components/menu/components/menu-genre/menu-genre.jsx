import './menu-genre.css';

export const MenuGenre = (props) => (
  <div className='menu-genre'>
    <button type='button'>
      <div>{props.genre}</div>
      <p>{props.amount}</p>
    </button>
  </div>
);

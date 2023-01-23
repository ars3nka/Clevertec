import listImg from './img/list.svg';
import sortImg from './img/sort.svg';
import tileImg from './img/tile.svg';

import './navigation-list.css';

export const NavigationList = () => (
  <div className='navigation-list'>
    <div className='navigation-list-left'>
      <input type='text' placeholder='Поиск книги или автора…' className='button-style search' />
      <button type='button' className='button-style sort'>
        <img src={sortImg} alt='' />
        По рейтингу
      </button>
    </div>
    <div className='navigation-list-right'>
      <button type='button' className='sort-button sort-button-active'>
        <img src={tileImg} alt='tile' />
      </button>
      <button type='button' className='sort-button'>
        <img src={listImg} alt='list' />
      </button>
    </div>
  </div>
);

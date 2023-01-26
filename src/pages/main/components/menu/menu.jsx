import { NavLink } from 'react-router-dom';

import { MenuGenre } from './components/menu-genre/menu-genre';

import './menu.css';

const menugenreDB = [
  { genre: 'Бизнес-книги', amount: 14 },
  { genre: 'Детективы', amount: 8 },
  { genre: 'Детские книги', amount: 14 },
  { genre: 'Зарубежная литература', amount: 2 },
  { genre: 'История', amount: 5 },
  { genre: 'Классическая литература', amount: 12 },
  { genre: 'Компьютерная литература', amount: 54 },
  { genre: 'Культура и искусство', amount: 5 },
  { genre: 'Наука и образование', amount: 2 },
  { genre: 'Публицистическая литература', amount: 0 },
  { genre: 'Справочники', amount: 10 },
  { genre: 'Фантастика', amount: 12 },
  { genre: 'Юмористическая литература', amount: 8 },
];

export const Menu = () => {
  const menuElements = menugenreDB.map(({ genre, amount }) => <MenuGenre genre={genre} amount={amount} />);

  return (
    <div className='menu'>
      <div className='menu-item menu-item-active'>
        <button type='button' className='menu-header'>
          Витрина книг
        </button>
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

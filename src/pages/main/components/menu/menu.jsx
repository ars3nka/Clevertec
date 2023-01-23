import { MenuGenre } from './components/menu-genre/menu-genre';

import './menu.css';

export const Menu = () => (
  <div className='menu'>
    <div className='menu-item menu-item-active'>
      <button type='button' className='menu-header'>
        Витрина книг
      </button>
      <div className='line' />
      <div className='submenu'>
        <button type='button' className='submenu-all'>
          Все книги
        </button>
        <MenuGenre genre='Бизнес-книги' amount={14} />
        <MenuGenre genre='Детективы' amount={8} />
        <MenuGenre genre='Детские книги' amount={14} />
        <MenuGenre genre='Зарубежная литература' amount={2} />
        <MenuGenre genre='История' amount={5} />
        <MenuGenre genre='Классическая литература' amount={12} />
        <MenuGenre genre='Компьютерная литература' amount={54} />
        <MenuGenre genre='Культура и искусство' amount={5} />
        <MenuGenre genre='Наука и образование' amount={2} />
        <MenuGenre genre='Публицистическая литература' amount={0} />
        <MenuGenre genre='Справочники' amount={10} />
        <MenuGenre genre='Фантастика' amount={12} />
        <MenuGenre genre='Юмористическая литература' amount={8} />
      </div>
    </div>
    <div className='menu-item'>
      <button type='button' className='menu-header'>
        Правила пользования
      </button>
    </div>
    <div className='menu-item'>
      <button type='button' className='menu-header'>
        Договор оферты
      </button>
    </div>
  </div>
);

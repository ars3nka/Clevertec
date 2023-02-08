import { booksData } from '../../db.js';

import { Books } from './components/books/books';
import { BooksList } from './components/books/books-list';
import { Menu } from './components/menu/menu';
import { NavigationList } from './components/navigation-list/navigation-list';

import './main-page.css';

export const MainPage = () => (
  <section className='main-wrapper main-section'>
    <main>
      <div className='main'>
        <div className='main-left'>{window.innerWidth >= 1200 ? <Menu /> : null}</div>
        <div className='main-right'>
          <NavigationList />
          <Books books={booksData} />
          <BooksList books={booksData} />
        </div>
      </div>
    </main>
  </section>
);

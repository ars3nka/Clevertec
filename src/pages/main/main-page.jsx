import { useSelector } from 'react-redux/es/exports.js';

import { Books } from './components/books/books';
import { BooksList } from './components/books/books-list';
import { Menu } from './components/menu/menu';
import { NavigationList } from './components/navigation-list/navigation-list';

import './main-page.css';

export const MainPage = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <section className='main-wrapper main-section'>
      <main>
        <div className='main'>
          <div className='main-left'>{window.innerWidth >= 1200 ? <Menu /> : null}</div>
          <div className='main-right'>
            <NavigationList />
            <Books books={books} />
            <BooksList books={books} />
          </div>
        </div>
      </main>
    </section>
  );
};

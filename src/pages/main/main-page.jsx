import { useSelector } from 'react-redux/es/exports.js';
import { useParams } from 'react-router-dom';

import { Books } from './components/books/books';
import { BooksList } from './components/books/books-list';
import { Menu } from './components/menu/menu';
import { NavigationList } from './components/navigation-list/navigation-list';

import './main-page.css';

export const MainPage = () => {
  const books = useSelector((state) => state.books.books);
  const booksCategories = useSelector((state) => state.books.booksCategories);
  console.log(booksCategories);
  const categoriesState = useSelector((state) => state.books.loadingCategories);
  const params = useParams();
  console.log(params.category);

  let selectedCategoryName = [];

  if (!categoriesState && params.category === 'all') {
    selectedCategoryName = books;
  }

  if (!categoriesState && params.category !== 'all') {
    const categoryName = booksCategories.find((el) => el.path === params.category);
    console.log(categoryName.name);
    selectedCategoryName = books.filter((el) => el.categories.includes(categoryName.name));
    console.log(selectedCategoryName);
  }

  return (
    <section className='main-wrapper main-section'>
      <main>
        <div className='main'>
          <div className='main-left'>{window.innerWidth >= 1200 ? <Menu /> : null}</div>
          <div className='main-right'>
            <NavigationList />
            <Books books={selectedCategoryName || books} />
            <BooksList books={books} />
          </div>
        </div>
      </main>
    </section>
  );
};

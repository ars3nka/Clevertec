import Lottie from 'react-lottie';
import { useSelector } from 'react-redux/es/exports.js';
import { useParams } from 'react-router-dom';

import { Error } from '../../components/error/error';
import * as animationData from '../../components/loader/loader.json';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux/api';

import { Books } from './components/books/books';
import { BooksList } from './components/books/books-list';
import { Menu } from './components/menu/menu';
import { NavigationList } from './components/navigation-list/navigation-list';

import './main-page.css';

export const MainPage = () => {
  const { isLoading: booksLoading, error: booksError, data: books } = useGetBooksQuery();
  const { isLoading: categoriesLoading, error: categoriesError, data: booksCategories } = useGetCategoriesQuery();

  const categoriesState = categoriesLoading;
  const params = useParams();

  let selectedCategoryName = [];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  if (booksLoading || categoriesLoading) {
    return (
      <div className='loader' data-test-id='loader'>
        <Lottie options={defaultOptions} width={150} height={150} />
      </div>
    );
  }

  if (booksError || categoriesError) {
    return <Error />;
  }

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
          <div className='main-left'>{window.innerWidth >= 1200 ? <Menu test='navigation' /> : null}</div>
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

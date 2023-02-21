/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom';

import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux/api';

import { Books } from './components/books/books';
import { BooksList } from './components/books/books-list';
import { NavigationList } from './components/navigation-list/navigation-list';

import './main-page.css';

export const MainPage = () => {
  const { isLoading: booksLoading, error: booksError, data: books } = useGetBooksQuery();
  const { isLoading: categoriesLoading, error: booksCategoriesError, data: booksCategories } = useGetCategoriesQuery();

  if (booksError || booksCategoriesError) {
    return null;
  }

  const categoriesState = categoriesLoading;
  const params = useParams();

  let selectedCategoryName = [];

  if (books && !categoriesState && params.category === 'all') {
    selectedCategoryName = books;
  }

  if (books && booksCategories && !categoriesState && params.category !== 'all') {
    const categoryName = booksCategories.find((el) => el.path === params.category);
    console.log(categoryName.name);
    selectedCategoryName = books.filter((el) => el.categories.includes(categoryName.name));
    console.log(selectedCategoryName);
  }

  return (
    <div className='main-right'>
      <NavigationList />
      <Books books={selectedCategoryName || books} />
      <BooksList books={selectedCategoryName || books} />
    </div>
  );
};

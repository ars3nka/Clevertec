/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
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

  const [booksSorted, setBooksSorted] = useState([]);
  const params = useParams();

  useEffect(() => {
    let selectedCategoryName = [];

    if (!booksLoading && !categoriesLoading && !booksError && !categoriesLoading) {
      selectedCategoryName = Object.assign([], books);
      selectedCategoryName.sort((a, b) => b.rating - a.rating);
      setBooksSorted(selectedCategoryName);
    }

    if (books && booksCategories && !categoriesLoading && params.category !== 'all') {
      const categoryName = booksCategories.find((el) => el.path === params.category);
      console.log(categoryName.name);
      selectedCategoryName = books.filter((el) => el.categories.includes(categoryName.name));
      console.log(selectedCategoryName);
      setBooksSorted(selectedCategoryName);
    }

    console.log('USEEFFECT');
  }, [books, booksCategories, booksError, booksLoading, categoriesLoading, params.category]);

  return (
    <div className='main-right'>
      <NavigationList />
      <Books books={booksSorted} />
      <BooksList books={booksSorted} />
    </div>
  );
};

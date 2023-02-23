/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux/api';

import { Books } from './components/books/books';
import { BooksList } from './components/books/books-list';
import { NavigationList, sortBooksByRating } from './components/navigation-list/navigation-list';

import './main-page.css';

export const MainPage = () => {
  const { isLoading: booksLoading, error: booksError, data: books } = useGetBooksQuery();
  const { isLoading: categoriesLoading, error: booksCategoriesError, data: booksCategories } = useGetCategoriesQuery();

  if (booksError || booksCategoriesError) {
    return null;
  }

  const [booksSorted, setBooksSorted] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isBookList, setBookList] = useState(false);
  const [isSortBooksDescendingOrder, setIsSortBooksDescendingOrder] = useState(true);

  const params = useParams();

  const setBookViewList = () => {
    setBookList(true);
    console.log('setBookViewList');
  };

  const setBookViewWindow = () => {
    setBookList(false);
    console.log('setBookViewWindow');
  };

  const toggleSortBooksByRating = () => {
    setIsSortBooksDescendingOrder(!isSortBooksDescendingOrder);
  };

  const sortedBooksByRating = useMemo(
    () => books && sortBooksByRating(books, isSortBooksDescendingOrder),
    [books, isSortBooksDescendingOrder]
  );

  const changeInputText = (value) => {
    setInputText(value);
  };

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

    if (inputText) {
      const filtredBooks = selectedCategoryName.filter((el) =>
        el.title.toLowerCase().includes(inputText.toLowerCase())
      );

      setBooksSorted(filtredBooks);
    }

    console.log('USE EFFECT');
  }, [books, booksCategories, booksError, booksLoading, categoriesLoading, inputText, params.category]);

  return (
    <div className='main-right'>
      <NavigationList
        changeInputText={changeInputText}
        inputText={inputText}
        toggleSortBooksByRating={toggleSortBooksByRating}
        isSortBooksDescendingOrder={isSortBooksDescendingOrder}
        setBookViewList={setBookViewList}
        setBookViewWindow={setBookViewWindow}
        isBookList={isBookList}
      />

      {booksSorted?.length ? (
        <React.Fragment>
          {isBookList ? <BooksList books={booksSorted} /> : <Books books={booksSorted} inputText={inputText} />}
        </React.Fragment>
      ) : (
        <div className='empty-data-text'>
          {inputText ? (
            <p data-test-id='search-result-not-found'>По запросу ничего не найдено</p>
          ) : (
            <p data-test-id='empty-category'>В этой категории книг ещё нет</p>
          )}
        </div>
      )}
    </div>
  );
};

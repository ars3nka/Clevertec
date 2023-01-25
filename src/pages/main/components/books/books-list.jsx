import { BookList } from './components/book/book-list';

export const BooksList = ({ books }) => {
  const booksElements = books.map((book) => (
    <BookList src={book.src} rating={book.rating} title={book.title} author={book.author} available={book.available} />
  ));

  return <div className='books-list'>{booksElements}</div>;
};

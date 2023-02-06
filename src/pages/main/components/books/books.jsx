import { Book } from './components/book/book';

import './books.css';

export const Books = ({ books }) => {
  const booksElements = books.map((book) => (
    <Book
      src={book.src}
      rating={book.rating}
      title={book.title}
      author={book.author}
      available={book.available}
      id={book.id}
      category={book.category}
    />
  ));

  return <div className='books'>{booksElements}</div>;
};

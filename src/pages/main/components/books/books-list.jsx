import { BookList } from './components/book/book-list';

export const BooksList = ({ books }) => {
  const booksElements = books.map((book) => (
    <BookList
      image={book.image}
      rating={book.rating}
      title={book.title}
      authors={book.authors}
      available={book.available}
      id={book.id}
      category={book.categories}
    />
  ));

  return <div className='books-list hide'>{booksElements}</div>;
};

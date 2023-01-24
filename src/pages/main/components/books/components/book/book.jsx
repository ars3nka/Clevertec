import altImage from './img/BookAltImage.png';

import './book.css';

export const Book = ({ src, rating, title, author, available }) => (
  <div className='book'>
    <div className='book-picture'>
      <img src={src || altImage} alt='Book' />
    </div>
    <div>{typeof rating === 'string' ? rating : `Рейтинг: ${rating}`}</div>
    <div className='book-title'>{title}</div>
    <div className='book-author'>{author}</div>
    {available === true ? (
      <button type='submit' className='book-button available'>
        Забронировать
      </button>
    ) : (
      <button type='submit' className='book-button'>
        {available}
      </button>
    )}
  </div>
);

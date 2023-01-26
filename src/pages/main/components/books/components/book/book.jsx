import { StarRating } from './components/star-rating/star-rating';
import altImage from './img/BookAltImage.png';

import './book.css';

export const Book = ({ src, rating, title, author, available }) => (
  <a href='/#/book' data-test-id='card' onClick={() => setTimeout(() => document.location.reload(), 100)}>
    <div className='book'>
      <div className='book-picture'>
        <img src={src || altImage} alt='Book' />
      </div>
      <div>{typeof rating === 'string' ? rating : <StarRating rating={rating} />}</div>
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
  </a>
);

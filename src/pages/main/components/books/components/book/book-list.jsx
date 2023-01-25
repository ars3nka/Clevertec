import { StarRating } from './components/star-rating/star-rating';
import altImage from './img/BookAltImage.png';

import './book-list.css';

export const BookList = ({ src, rating, title, author, available }) => (
  <a href='/#/book'>
    <div className='book-list' data-test-id='card'>
      <div className='book-picture book-list-picture'>
        <img src={src || altImage} alt='Book' />
      </div>
      <div className='book-list-left-container'>
        <div className='book-list-title'>{title}</div>
        <div className='book-list-author'>{author}</div>
        <div className='book-list-bottom'>
          <div>{typeof rating === 'string' ? rating : <StarRating rating={rating} />}</div>
          {available === true ? (
            <button type='submit' className='book-list-button available'>
              Забронировать
            </button>
          ) : (
            <button type='submit' className='book-list-button'>
              {available}
            </button>
          )}
        </div>
      </div>
    </div>
  </a>
);

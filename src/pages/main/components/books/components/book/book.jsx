import { NavLink } from 'react-router-dom';

import { StarRating } from './components/star-rating/star-rating';
import altImage from './img/BookAltImage.png';

import './book.css';

export const Book = ({ image, rating, title, authors, booking, id, category }) => (
  <NavLink to={`${id}`}>
    <div className='book' data-test-id='card'>
      <div className='book-picture'>
        <img src={`https://strapi.cleverland.by${image?.url}` || altImage} alt='Book' />
      </div>
      <div>{rating === null ? 'еще нет оценок' : <StarRating rating={rating} />}</div>
      <div className='book-title'>{title}</div>
      <div className='book-author'>{authors}</div>
      {booking === null ? (
        <button type='submit' className='book-button available'>
          Забронировать
        </button>
      ) : (
        <button type='submit' className='book-button'>
          Забронирована
        </button>
      )}
    </div>
  </NavLink>
);

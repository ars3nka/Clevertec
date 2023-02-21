import { NavLink } from 'react-router-dom';

import { BookingButton } from '../../../../../../components/button/button';
import { BASE_URL } from '../../../../../../redux/api';

import { StarRating } from './components/star-rating/star-rating';
import altImage from './img/BookAltImage.png';

import './book.css';

export const Book = ({ image, rating, title, authors, booking, id }) => (
  <NavLink to={`${id}`}>
    <div className='book' data-test-id='card'>
      <div className='book-picture'>
        <img src={image ? BASE_URL + image.url : altImage} alt='Book' />
      </div>
      <div>{rating === null ? 'еще нет оценок' : <StarRating rating={rating} />}</div>
      <div className='book-title'>{title}</div>
      <div className='book-author'>{authors}</div>
      {booking === null ? (
        <BookingButton className='booking-button book-button available' text='Забронировать' />
      ) : (
        <BookingButton className='booking-button book-button' text='Забронирована' />
      )}
    </div>
  </NavLink>
);

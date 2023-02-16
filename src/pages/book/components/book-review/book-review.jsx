import { StarRating } from '../../../main/components/books/components/book/components/star-rating/star-rating';

import userImg from './img/user.png';

import './book-review.css';

export const Review = ({ firstName, lastName, date, text, src, rating }) => (
  <div className='review'>
    <div className='review-head'>
      <img src={src || userImg} alt='review-user' />
      <div className='review-info'>
        <span className='review-name'>{`${firstName} ${lastName}`}</span>
        <span className='review-date'>{date}</span>
      </div>
    </div>
    <div className='star-rating review-rating'>
      <StarRating rating={rating} />
    </div>
    <div className='review-text'>{text}</div>
  </div>
);

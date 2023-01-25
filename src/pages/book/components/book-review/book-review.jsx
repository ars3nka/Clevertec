import userImg from './img/user.png';

import './book-review.css';

export const Review = ({ name, date, text, src }) => (
  <div className='review'>
    <div className='review-head'>
      <img src={src || userImg} alt='review-user' />
      <div className='review-info'>
        <span className='review-name'>{name}</span>
        <span className='review-date'>{date}</span>
      </div>
    </div>
    <div className='star-rating review-rating'>
      <div className='star' />
      <div className='star' />
      <div className='star' />
      <div className='star' />
      <div className='star-empty' />
    </div>
    <div className='review-text'>{text}</div>
  </div>
);

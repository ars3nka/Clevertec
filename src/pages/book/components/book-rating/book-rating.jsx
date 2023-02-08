import './book-rating.css';

export const BookPageRating = () => (
  <div className='book-about book-rating'>
    <h5>Рейтинг</h5>
    <div className='line book-line' />
    <div className='star-rating'>
      <div className='star' />
      <div className='star' />
      <div className='star' />
      <div className='star' />
      <div className='star-empty' />
      <h5 className='star-rating-number'>4.3</h5>
    </div>
  </div>
);

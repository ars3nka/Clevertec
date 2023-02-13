import './book-rating.css';

export const BookPageRating = ({ rating }) => {
  const starEmpty = 5 - rating;

  const stars = () => {
    const starsArray = [];

    for (let i = 0; i < rating; i++) {
      starsArray.push(<div className='star' />);
    }
    for (let i = 0; i < starEmpty; i++) {
      starsArray.push(<div className='star-empty' />);
    }

    return starsArray;
  };

  return (
    <div className='book-about book-rating'>
      <h5>Рейтинг</h5>
      <div className='line book-line' />
      <div className='star-rating'>
        {stars()}
        <h5 className='star-rating-number'>{rating}</h5>
      </div>
    </div>
  );
};

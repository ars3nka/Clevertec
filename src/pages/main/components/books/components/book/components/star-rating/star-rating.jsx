export const StarRating = ({ rating }) => {
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

  return <div className='star-rating review-rating'> {stars()} </div>;
};

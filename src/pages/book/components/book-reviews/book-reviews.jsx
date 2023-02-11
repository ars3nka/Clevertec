import { useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as ReviewButton } from '../../img/review_open.svg';
import { Review } from '../book-review/book-review';

import './book-reviews.css';

export const BookPageReviews = () => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  return (
    <div className='book-about book-reviews'>
      <div className='book-about book-reviews-header'>
        <h5>Отзывы</h5>
        <p className='book-about book-reviews-count'>3</p>
        <ReviewButton
          className={classNames('book-about book-reviews-button', { bookReviewsButtonOpen: isReviewsOpen })}
          onClick={() => setIsReviewsOpen(!isReviewsOpen)}
          data-test-id='button-hide-reviews'
        />
      </div>

      <div className='line book-line' />

      <div className={classNames('reviews', { hide: !isReviewsOpen })}>
        <Review name='Иван Иванов' date='5 января 2019' />
        <Review
          name='Николай Качков'
          date='20 июня 2018'
          text='Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'
        />
        <Review name='Екатерина Беляева' date='18 февраля 2018' />
      </div>
      <div className='review-button'>
        <button type='submit' className='book-button available' data-test-id='button-rating'>
          оценить книгу
        </button>
      </div>
    </div>
  );
};

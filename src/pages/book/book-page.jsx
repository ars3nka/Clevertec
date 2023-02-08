import { useParams } from 'react-router-dom';

import { booksData } from '../../db';

import { BookPageInfoTable } from './components/book-info-table/book-info-table';
import { BookPageRating } from './components/book-rating/book-rating';
import { BookPageReviews } from './components/book-reviews/book-reviews';
import { BookSwiper } from './components/book-swiper/book-swiper';
import altImage from './img/altImage.jpg';

import './book-page.css';

// import './styles.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const BookPage = () => {
  const params = useParams();
  const { id } = params;
  const book = booksData.find((book) => book.id === Number(id));

  console.log('Книга:', book);

  return (
    <section className='main-wrapper book-page'>
      <main>
        <div className='book-route'>
          Бизнес книги / Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
        </div>
        <div className='main'>
          <div className='main-left'>
            <div className='book-picture'>
              {book.gallery ? (
                <BookSwiper gallery={book.gallery} />
              ) : (
                <img src={book.src || altImage} alt='' className='big-image' data-test-id='slide-big' />
              )}
            </div>
          </div>
          <div className='main-right'>
            <h3 className='book-title'>{book.title}</h3>

            <h5 className='book-author'>{book.author}</h5>
            <button type='submit' className='book-button available'>
              Забронировать
            </button>
            <div className='book-about'>
              <h5>О книге</h5>
              <p>
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                время?
                <br />
                <br />
                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                алгоритмы — это веселое и увлекательное занятие.
              </p>
            </div>
          </div>
        </div>
        <div className='book-bottom'>
          <BookPageRating />
          <BookPageInfoTable />
          <BookPageReviews />
        </div>
      </main>
    </section>
  );
};

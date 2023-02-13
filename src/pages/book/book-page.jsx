import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';

import { LottieLoader } from '../../components/loader/loader';
import * as animationData from '../../components/loader/loader.json';
import { booksData } from '../../db';
import { service } from '../../service';

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
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { id } = params;
  // const books = useSelector((state) => state.books.books);
  // const book = books.find((book) => book.id === Number(id));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  const getBook = async () => {
    try {
      setIsLoading(true);
      const responce = await service.get(`/api/books/${id}`);
      setBook(responce.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('Книга:', book);

  if (isLoading) {
    return (
      <div className='loader' data-test-id='loader'>
        <Lottie options={defaultOptions} width={150} height={150} />
      </div>
    );
  }

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

            <h5 className='book-author'>{book.authors}</h5>
            <button type='submit' className='book-button available'>
              Забронировать
            </button>
            <div className='book-about'>
              <h5>О книге</h5>
              <p className='book-description'>{book.description}</p>
            </div>
          </div>
        </div>
        <div className='book-bottom'>
          <BookPageRating rating={book.rating} />
          <BookPageInfoTable book={book} />
          <BookPageReviews />
        </div>
      </main>
    </section>
  );
};

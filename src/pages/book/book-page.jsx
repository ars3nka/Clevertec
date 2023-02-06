import { useParams } from 'react-router-dom';

import { booksData } from '../../db';

import { Review } from './components/book-review/book-review';
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

  console.log(book);

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
                <img src={book.src || altImage} alt='' className='big-image' />
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
          <div className='book-about book-more'>
            <h5>Подробная информация</h5>
            <div className='line book-line' />
            <div className='information'>
              <table>
                <td className='td-main'>
                  <tr>
                    <td className='category'>Издательство</td>
                    <td>Питер</td>
                  </tr>
                  <tr>
                    <td className='category'>Год издания</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td className='category'>Страниц</td>
                    <td>288</td>
                  </tr>
                  <tr>
                    <td className='category'>Переплёт</td>
                    <td>Мягкая обложка</td>
                  </tr>
                  <tr>
                    <td className='category'>Формат</td>
                    <td>70х100</td>
                  </tr>
                </td>
                <td>
                  <tr>
                    <td className='category'>Жанр</td>
                    <td>Компьютерная литература</td>
                  </tr>
                  <tr>
                    <td className='category'>Вес</td>
                    <td>370 г</td>
                  </tr>
                  <tr>
                    <td className='category'>ISBN</td>
                    <td>978-5-4461-0923-4</td>
                  </tr>
                  <tr>
                    <td className='category'>Изготовитель</td>
                    <td>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</td>
                  </tr>
                </td>
              </table>
            </div>
          </div>
          <div className='book-about book-reviews'>
            <h5>Отзывы</h5>
            <div className='line book-line' />
            <div className='reviews'>
              <Review name='Иван Иванов' date='5 января 2019' />
              <Review
                name='Николай Качков'
                date='20 июня 2018'
                text='Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'
              />
              <Review name='Екатерина Беляева' date='18 февраля 2018' />
            </div>
            <div className='review-button'>
              <button type='submit' className='book-button available'>
                оценить книгу
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

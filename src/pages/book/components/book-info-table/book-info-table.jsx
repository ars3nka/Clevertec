import './book-info-table.css';

export const BookPageInfoTable = (book) => (
  <div className='book-about book-more'>
    <h5>Подробная информация</h5>
    <div className='line book-line' />
    <div className='information'>
      <table>
        <td className='td-main'>
          <tr>
            <td className='category'>Издательство</td>
            <td>{book.book.publish}</td>
          </tr>
          <tr>
            <td className='category'>Год издания</td>
            <td>{book.book.issueYear}</td>
          </tr>
          <tr>
            <td className='category'>Страниц</td>
            <td>{book.book.pages}</td>
          </tr>
          <tr>
            <td className='category'>Переплёт</td>
            <td>{book.book.cover}</td>
          </tr>
          <tr>
            <td className='category'>Формат</td>
            <td>{book.book.format}</td>
          </tr>
        </td>
        <td>
          <tr>
            <td className='category'>Жанр</td>
            <td>{book.book.categories}</td>
          </tr>
          <tr>
            <td className='category'>Вес</td>
            <td>{book.book.weight} г</td>
          </tr>
          <tr>
            <td className='category'>ISBN</td>
            <td>{book.book.ISBN}</td>
          </tr>
          <tr>
            <td className='category'>Изготовитель</td>
            <td>{book.book.producer}</td>
          </tr>
        </td>
      </table>
    </div>
  </div>
);

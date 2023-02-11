import './book-info-table.css';

export const BookPageInfoTable = () => (
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
);

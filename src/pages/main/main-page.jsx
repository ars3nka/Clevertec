import { Books } from './components/books/books';
import { Menu } from './components/menu/menu';
import { NavigationList } from './components/navigation-list/navigation-list';

import './main-page.css';

const books = [
  {
    src: 'https://avatars.mds.yandex.net/get-images-cbir/7859386/_qcMvLnlSA1v9khme_fpng4498/ocr',
    rating: 'ещё нет оценок',
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    author: 'Адитья Бхаргава, 2019',
    available: true,
  },
  {
    src: 'https://avatars.mds.yandex.net/get-images-cbir/7859386/_qcMvLnlSA1v9khme_fpng4498/ocr',
    rating: 4,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава, 2019',
    available: true,
  },
  {
    src: 'https://avatars.mds.yandex.net/get-images-cbir/7859386/_qcMvLnlSA1v9khme_fpng4498/ocr',
    rating: 4,
    title: 'Грокаем алгоритмы. ',
    author: 'Адитья Бхаргава, 2019',
    available: 'занята до 03.05',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-images-cbir/7859386/_qcMvLnlSA1v9khme_fpng4498/ocr',
    rating: 'ещё нет оценок',
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    author: 'Адитья Бхаргава, 2019',
    available: true,
  },
  {
    src: 'https://avatars.mds.yandex.net/get-images-cbir/7859386/_qcMvLnlSA1v9khme_fpng4498/ocr',
    rating: 'ещё нет оценок',
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    available: 'Забронирована',
  },
  {
    src: '',
    rating: 'ещё нет оценок',
    title: 'Грокаем алгоритмы. Иллюстрированное ',
    author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    available: 'Занята до 23.04',
  },
  {
    src: 'https://avatars.mds.yandex.net/get-images-cbir/7859386/_qcMvLnlSA1v9khme_fpng4498/ocr',
    rating: 4,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    available: true,
  },
  {
    src: 'https://avatars.mds.yandex.net/get-images-cbir/7859386/_qcMvLnlSA1v9khme_fpng4498/ocr',
    rating: 4,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    available: true,
  },
  {
    src: 'https://avatars.mds.yandex.net/get-images-cbir/7859386/_qcMvLnlSA1v9khme_fpng4498/ocr',
    rating: 4,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    author: 'Адитья Бхаргава, 2019',
    available: true,
  },
  {
    src: '',
    rating: 4,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    author: 'Адитья Бхаргава, 2019',
    available: true,
  },
];

export const MainPage = () => (
  <section className='main-section'>
    <main>
      <div className='main'>
        <div className='main-left'>
          <Menu />
        </div>
        <div className='main-right'>
          <NavigationList />
          <Books books={books} />
        </div>
      </div>
    </main>
  </section>
);

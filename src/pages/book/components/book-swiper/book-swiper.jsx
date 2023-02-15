/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BASE_URL } from '../../../../redux/api';
import altImage from '../../img/altImage.jpg';

import './book-swiper.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const BookSwiper = ({ gallery }) => {
  if (gallery === null || gallery.length === 0) {
    return <img src={altImage} alt='' className='big-image' data-test-id='slide-big' />;
  }

  if (gallery.length === 1) {
    return <img src={BASE_URL + gallery[0].url} alt='' className='big-image' data-test-id='slide-big' />;
  }

  const urlArray = gallery.map((item) => item.url);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [paginationSwiper, setPaginationSwiper] = useState(false);
  // let screenWidth = window.screen.width;

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     screenWidth = window.screen.width;
  //   });
  //   if (screenWidth < 768) {
  //     setPaginationSwiper(true);
  //   } else {
  //     setPaginationSwiper(false);
  //   }
  //   console.log(screenWidth);
  // });

  const GalleryElements = urlArray.map((image) => (
    <SwiperSlide>
      <img src={BASE_URL + image} alt='nature' className='big-image' data-test-id='slide-mini' />
    </SwiperSlide>
  ));

  const ThumbsElements = urlArray.map((image) => (
    <SwiperSlide>
      <img src={BASE_URL + image} alt='nature' className='thumb-image' data-test-id='slide-mini' />
    </SwiperSlide>
  ));

  return (
    <React.Fragment>
      <Swiper
        data-test-id='slide-big'
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#363636',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className='mySwiper2'
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
      >
        {GalleryElements}
      </Swiper>
      <div className='swiper-pagination' />
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        watchSlidesVisibility={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {ThumbsElements}
      </Swiper>
    </React.Fragment>
  );
};

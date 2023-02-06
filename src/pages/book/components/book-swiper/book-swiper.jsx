import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/react';

import './book-swiper.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const BookSwiper = ({ gallery }) => {
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

  const GalleryElements = gallery.map((image) => (
    <SwiperSlide>
      <img src={image} alt='nature' className='big-image' />
    </SwiperSlide>
  ));

  const ThumbsElements = gallery.map((image) => (
    <SwiperSlide>
      <img src={image} alt='nature' className='thumb-image' />
    </SwiperSlide>
  ));

  return (
    <React.Fragment>
      <Swiper
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

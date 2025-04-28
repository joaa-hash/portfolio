'use client';

import { SliderProps } from '@common/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImageView from '@components/ImageView';

const ImagesFullSlider = ({ items }) => {
  return (
    <>
      {/* container */}
      <div className='container-fluid'>
        {/* row */}
        <div className='row'>
          {/* col */}
          <div className='col-lg-12'>
            {/* slider container */}
            <Swiper
              {...SliderProps.milImagesFullSlider}
              className='swiper-container ja-works-slider'
              style={{ overflow: 'visible' }}
            >
              {items.map((item, key) => (
                <SwiperSlide className='swiper-slide' key={`project-slider-item-${key}`}>
                  {/* item frame */}
                  <a
                    data-fancybox='gallery'
                    data-no-swup
                    href={item.image}
                    className='ja-a ja-portfolio-item-frame ja-horizontal'
                  >
                    {/* img */}
                    <img src={item.image} alt={item.name} />
                    {/* zoom icon */}
                    <span className='ja-item-hover'>
                      <i className='fas fa-expand'></i>
                    </span>
                  </a>
                  {/* item end */}
                </SwiperSlide>
              ))}
            </Swiper>
            {/* slider container end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className='col-lg-12'>
            {/* slider navigation */}
            <div className='ja-project-slider-navigation ja-slider-navigation'>
              {/* left side */}
              <div className='ja-sn-left'>
                {/* slider pagination */}
                <div className='swiper-pagination'></div>
              </div>
              {/* left side end */}

              {/* right side */}
              <div className='ja-sn-right'>
                {/* slider navigation */}
                <div className='ja-slider-nav-frame'>
                  {/* prev */}
                  <div className='ja-slider-nav ja-works-swiper-prev'>
                    <i className='fas fa-chevron-left'></i>
                  </div>
                  {/* next */}
                  <div className='ja-slider-nav ja-works-swiper-next'>
                    <i className='fas fa-chevron-right'></i>
                  </div>
                </div>
                {/* slider navigation */}
              </div>
              {/* right side end */}
            </div>
            {/* slider navigation end */}
          </div>
          {/* col end */}
        </div>
        {/* row end */}

        <ImageView />
      </div>
      {/* container end */}
    </>
  );
};
export default ImagesFullSlider;

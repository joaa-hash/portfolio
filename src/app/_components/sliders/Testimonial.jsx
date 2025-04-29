'use client';

import { SliderProps } from '@common/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';

import Data from '@data/sliders/testimonial';

const TestimonialSlider = () => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      {/* testimonials */}
      <div className='container-fluid'>
        {/* row */}
        <div className='row'>
          {/* col */}
          <div className='col-lg-12'>
            {/* section title */}
            <div className='ja-section-title'>
              {/* title frame */}
              <div className='ja-title-frame'>
                {/* title */}
                <h4 dangerouslySetInnerHTML={{ __html: Data.title }} />
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className='col-lg-12'>
            {/* slider container */}
            <Swiper
              {...SliderProps.milReviewsSlider}
              className='swiper-container ja-testimonial-slider swiper-autoheight'
            >
              {Data.items.map((item, key) => (
                <SwiperSlide
                  className='swiper-slide ja-testimonial-slider-item'
                  key={`testimonial-slider-item-${key}`}
                >
                  {/* testimonial */}
                  <div className='ja-a ja-testimonial'>
                    {/* testimonial body */}
                    <div className='testimonial-body'>
                      {/* photo */}
                      <img
                        className='ja-testimonial-face'
                        src={item.image}
                        alt={item.name}
                      />
                      {/* name */}
                      <h5>{item.name}</h5>
                      <div className='ja-el-suptitle mb-15'>{item.role}</div>
                      {/* text */}
                      <div className='mb-15'>{item.text}</div>
                    </div>
                    {/* testimonial body end */}
                    {/* testimonial footer */}
                    <div className='ja-testimonial-footer'>
                      <div className='ja-left-side'>
                        {/* star rate */}
                        <ul className='ja-star-rate'>
                          {stars.slice(0, item.rating).map((star, star_key) => (
                            <li key={`testimonial-slider-item-${key}-star-${star_key}`}>
                              <i className='fas fa-star'></i>
                            </li>
                          ))}
                        </ul>
                        {/* star rate end */}
                      </div>
                      <div className='ja-right-side'></div>
                    </div>
                    {/* testimonial footer end */}
                  </div>
                  {/* testimonial end */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* col end */}

          {/* col */}
          <div className='col-lg-12'>
            {/* slider navigation */}
            <div className='ja-slider-navigation ja-testimonial-slider-navigation'>
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
                  <div className='ja-slider-nav ja-testi-swiper-prev'>
                    <i className='fas fa-chevron-left'></i>
                  </div>
                  {/* next */}
                  <div className='ja-slider-nav ja-testi-swiper-next'>
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
      </div>
      {/* reviews end */}
    </>
  );
};
export default TestimonialSlider;

'use client';

import Data from '@data/sections/history.json';
import Testimonials from '@data/sliders/testimonial.json';
import Popup from 'reactjs-popup';
import ImageView from '@components/ImageView';
import { find } from 'lodash';

const HistorySection = ({ paddingTop = 0 }) => {
  return (
    <>
      {/* container */}
      <div className='container-fluid'>
        {/* row */}
        <div className={paddingTop ? 'row p-30-0' : 'row'}>
          {/* col */}
          <div className='col-lg-6'>
            {/* section title */}
            <div className='ja-section-title'>
              {/* title frame */}
              <div className='ja-title-frame'>
                {/* title */}
                <h4 dangerouslySetInnerHTML={{ __html: Data.col1.title }} />
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}

            {/* timeline */}
            <div className='ja-timeline ja-gallery' id='history'>
              {Data.col1.items.map((item, key) => (
                <div className='ja-timeline-item' key={`education-item-${key}`}>
                  <div className='ja-timeline-mark-light'></div>
                  <div className='ja-timeline-mark'></div>

                  <div className='ja-a ja-timeline-content'>
                    <div className='ja-card-header'>
                      <div className='ja-left-side'>
                        <h5 dangerouslySetInnerHTML={{ __html: item.title }} />
                        <div className='ja-el-suptitle mb-15'>{item.subtitle}</div>
                      </div>
                      <div className='ja-right-side'>
                        <span className='ja-date'>{item.date}</span>
                      </div>
                    </div>
                    <p>{item.text}</p>
                    {item.button && (
                      <a
                        data-fancybox='diplome'
                        data-no-swup
                        href={item.button.link}
                        className='ja-link ja-color-link ja-w-chevron'
                      >
                        {item.button.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* timeline end */}
          </div>
          <div className='col-lg-6'>
            {/* section title */}
            <div className='ja-section-title'>
              {/* title frame */}
              <div className='ja-title-frame'>
                {/* title */}
                <h4 dangerouslySetInnerHTML={{ __html: Data.col2.title }} />
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}

            {/* timeline */}
            <div className='ja-timeline'>
              {Data.col2.items.map((item, key) => (
                <div className='ja-timeline-item' key={`works-item-${key}`}>
                  <div className='ja-timeline-mark-light'></div>
                  <div className='ja-timeline-mark'></div>

                  <div className='ja-a ja-timeline-content'>
                    <div className='ja-card-header'>
                      <div className='ja-left-side'>
                        <h5>{item.title}</h5>
                        <div className='ja-el-suptitle mb-15'>{item.subtitle}</div>
                      </div>
                      <div className='ja-right-side'>
                        <span className='ja-date'>{item.date}</span>
                      </div>
                    </div>
                    <p>{item.text}</p>
                    {(() => {
                      if (item.button) {
                        let testimonial;

                        switch (item.button.type) {
                          case 'modal':
                            testimonial = find(Testimonials.items, {
                              id: item.button.link,
                            });

                            return (
                              <Popup
                                trigger={
                                  <a className='ja-link ja-color-link ja-w-chevron'>
                                    {item.button.label}
                                  </a>
                                }
                                position='bottom center'
                              >
                                {/* testimonial */}
                                <div className='ja-a ja-testimonial'>
                                  {/* testimonial body */}
                                  <div className='testimonial-body'>
                                    {/* photo */}
                                    <img
                                      className='ja-testimonial-face'
                                      src={testimonial.image}
                                      alt='face'
                                    />
                                    {/* name */}
                                    <h5>{testimonial.name}</h5>
                                    <div className='ja-el-suptitle mb-15'>
                                      {testimonial.role}
                                    </div>
                                    {/* text */}
                                    <div className='mb-15'>{testimonial.text}</div>
                                  </div>
                                  {/* testimonial body end */}
                                  {/* testimonial footer */}
                                  <div className='ja-testimonial-footer'>
                                    <div className='ja-left-side'>
                                      {/* star rate */}
                                      <ul className='ja-star-rate'>
                                        <li>
                                          <i className='fas fa-star'></i>
                                        </li>
                                        <li>
                                          <i className='fas fa-star'></i>
                                        </li>
                                        <li>
                                          <i className='fas fa-star'></i>
                                        </li>
                                        <li>
                                          <i className='fas fa-star'></i>
                                        </li>
                                        <li>
                                          <i className='fas fa-star'></i>
                                        </li>
                                      </ul>
                                      {/* star rate end */}
                                    </div>
                                    <div className='ja-right-side'></div>
                                  </div>
                                  {/* testimonial footer end */}
                                </div>
                                {/* testimonial end */}
                              </Popup>
                            );
                          case 'link':
                            return (
                              <a
                                className='ja-link ja-color-link ja-w-chevron'
                                href={item.button.link}
                                target='_blank'
                              >
                                {item.button.label}
                              </a>
                            );
                        }
                      }
                    })()}
                  </div>
                </div>
              ))}
            </div>
            {/* timeline end */}
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
export default HistorySection;

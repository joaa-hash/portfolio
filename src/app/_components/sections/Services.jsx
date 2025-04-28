import Data from '@data/sections/services.json';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <>
      {/* services */}
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

          {Data.items.map((item, key) => (
            <div
              className='col-lg-4 col-md-6 service-box-wrapper'
              key={`services-item-${key}`}
            >
              {/* service */}
              <div className='ja-a ja-service-icon-box'>
                {/* service content */}
                <div className='ja-service-ib-content'>
                  {/* title */}
                  <h5 className='mb-15'>{item.title}</h5>
                  {/* text */}
                  <div className='mb-15'>{item.text}</div>
                  {/* button */}
                  <div className='ja-buttons-frame'>
                    <Link
                      href={item.button.link}
                      className='ja-link ja-color-link ja-w-chevron'
                    >
                      {item.button.label}
                    </Link>
                  </div>
                </div>
                {/* service content end */}
              </div>
              {/* service end */}
            </div>
          ))}
        </div>
        {/* row end */}
      </div>
      {/* services end */}
    </>
  );
};

export default ServicesSection;

'use client';

import ImageView from '@components/ImageView';

const ImageFull = ({ src, title }) => {
  return (
    <>
      {/* container */}
      <div className='container-fluid'>
        {/* row */}
        <div className='row'>
          {/* col */}
          <div className='col-lg-12'>
            {/* project cover */}
            <div className='ja-a ja-project-cover'>
              {/* item frame */}
              <a
                data-fancybox='gallery'
                data-no-swup
                href={src}
                className='ja-portfolio-item-frame ja-horizontal'
              >
                {/* img */}
                <img src={src} alt={title} />
                {/* zoom icon */}
                <span className='ja-item-hover'>
                  <i className='fas fa-expand'></i>
                </span>
              </a>
              {/* item end */}
            </div>
            {/* project cover nd */}
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
export default ImageFull;

'use client';

import Isotope from 'isotope-layout';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ImageView from '@components/ImageView';

const ProjectsMasonry = ({ projects, categories, layout = 'masonry', columns = 2 }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    //setTimeout(() => {
    isotope.current = new Isotope('.ja-grid', {
      itemSelector: '.ja-grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.ja-grid-item',
      },
      transitionDuration: '.6s',
    });
    //}, 500);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key, e) => {
    e.preventDefault();
    setFilterKey(key);
    const filterLinks = document.querySelectorAll('.ja-filter a');
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute('data-filter');
      if (filterValue == key) {
        filter.classList.add('ja-current');
      } else {
        filter.classList.remove('ja-current');
      }
    });
  };

  return (
    <>
      {/* container */}
      <div className='container-fluid'>
        {/* row */}
        <div className='row p-30-0'>
          {/* col */}
          <div className='col-lg-12'>
            {/* section title */}
            <div className='ja-section-title'>
              {/* title frame */}
              <div className='ja-title-frame'>
                {/* title */}
                <h4>Works</h4>
              </div>
              {/* title frame end */}
              {/* right frame */}
              <div className='ja-right-frame'>
                {/* filter */}
                <div className='ja-filter'>
                  {/* filter link */}
                  <a
                    href='#'
                    data-filter='*'
                    onClick={(e) => handleFilterKeyChange('*', e)}
                    className='ja-link ja-current'
                  >
                    All Categories
                  </a>
                  {/* filter link */}
                  {categories.map((item, key) => (
                    <a
                      href='#'
                      key={`projects-filter-item-${key}`}
                      data-filter={`${item.slug}`}
                      className='ja-link'
                      onClick={(e) => handleFilterKeyChange(item.slug, e)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* filter end */}
              </div>
              {/* right frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}

          <div className={`ja-grid ja-grid-${columns}-col ja-gallery`}>
            {/* grid item */}
            {projects.map((item, key) => (
              <div
                className={`ja-grid-item ${item.category_slug}`}
                key={`projects-item-${key}`}
              >
                {/* grid item frame */}
                <a
                  data-fancybox='gallery'
                  data-no-swup
                  href={item.image}
                  className={
                    layout == 'masonry'
                      ? `ja-a ja-portfolio-item-frame ja-${
                          columns == 3 && item.masonrySize == 'horizontal'
                            ? 'square'
                            : item.masonrySize
                        }`
                      : `ja-a ja-portfolio-item-frame ja-${
                          columns == 3 ? 'square' : 'horizontal'
                        }`
                  }
                >
                  {/* img */}
                  <img src={item.image} alt={item.title} />
                  {/* zoom icon */}
                  <span className='ja-item-hover'>
                    <i className='fas fa-expand'></i>
                  </span>
                </a>
                {/* grid item frame end */}
                {/* description */}
                <div className='ja-item-description'>
                  {/* title */}
                  <h5 className='mb-15'>{item.title}</h5>
                  {/* button */}
                  <Link
                    href={`/projects/${item.id}`}
                    className='ja-link ja-color-link ja-w-chevron'
                  >
                    Read more
                  </Link>
                </div>
                {/* description end */}
              </div>
            ))}
            {/* grid item end */}
          </div>
        </div>
        {/* row end */}

        <ImageView />
      </div>
      {/* container end */}
    </>
  );
};
export default ProjectsMasonry;

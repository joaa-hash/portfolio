import Link from 'next/link';
import usePagination from '@library/usePagination.js';

export const dotts = '...';

const Pagination = ({ currentPage, totalItems, perPage, renderPageLink }) => {
  const pages = usePagination(totalItems, currentPage, perPage);

  return (
    <>
      {/* pagination */}
      <div className='ja-a ja-pagination'>
        {currentPage > 1 && (
          <Link
            key='pagination-item-prev'
            href={
              currentPage > 1
                ? renderPageLink(currentPage - 1)
                : renderPageLink(currentPage)
            }
            className='ja-link ja-color-link ja-w-chevron ja-left-link'
          >
            Prev
          </Link>
        )}
        {currentPage <= 1 && (
          <div
            key='pagination-item-prev'
            className='ja-link ja-color-link ja-w-chevron ja-left-link'
          >
            Prev
          </div>
        )}

        <div className='ja-pagination-center ja-m-hidden'>
          {pages.map((pageNumber, i) =>
            pageNumber === dotts ? (
              <span className='mil-pagination-text' key={`pagination-item-${i}`}>
                {pageNumber}
              </span>
            ) : (
              <Link
                href={renderPageLink(pageNumber)}
                key={`pagination-item-${i}`}
                className={`${pageNumber === currentPage ? 'ja-active-pag' : ''}`}
              >
                {pageNumber}
              </Link>
            ),
          )}
        </div>

        {currentPage < pages.length && (
          <Link
            key='pagination-item-next'
            href={
              currentPage < pages.length
                ? renderPageLink(currentPage + 1)
                : renderPageLink(currentPage)
            }
            className='ja-link ja-color-link ja-w-chevron'
          >
            Next
          </Link>
        )}
        {currentPage == pages.length && (
          <div key='pagination-item-next' className='ja-link ja-color-link ja-w-chevron'>
            Next
          </div>
        )}
      </div>
      {/* pagination end */}
    </>
  );
};
export default Pagination;

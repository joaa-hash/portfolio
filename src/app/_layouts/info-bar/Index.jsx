'use client';

import ImageView from '@components/ImageView';
import AppData from '@data/app.json';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ProgressBarAnim } from '@common/progressBar';

const InfoBarModule = () => {
  const [toggle, setToggle] = useState(false);

  const barOpen = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.querySelector('.ja-content').classList.add('ja-active');
    } else {
      document.querySelector('.ja-content').classList.remove('ja-active');
    }
  };

  useEffect(() => {
    ProgressBarAnim();
  }, []);

  return (
    <>
      {/* info bar */}
      <div className={`ja-info-bar ${toggle ? 'ja-active' : ''}`}>
        {/* menu bar frame */}
        <div className='ja-info-bar-frame'>
          {/* info bar header */}
          <div className='ja-info-bar-header'>
            {/* info bar button */}
            <div
              className={`ja-info-bar-btn ${toggle ? 'ja-active' : ''}`}
              onClick={barOpen}
            >
              <i className='fas fa-ellipsis-v'></i>
            </div>
            {/* info bar button end */}
          </div>
          {/* info bar header end */}

          {/* info bar header */}
          <div className='ja-header'>
            {/* avatar */}
            <div className='ja-avatar'>
              <Link href='/' className='ja-avatar-curtain'>
                {AppData.profile.showAvatar ? (
                  <img src={AppData.profile.avatar} alt='avatar' />
                ) : (
                  <>
                    <h2 className='ja-avatar-placeholder-text'>
                      J<span className='mr-1'></span>A
                    </h2>
                  </>
                )}
              </Link>
              {/* available */}
              <div className='ja-lamp-light'>
                {/* add class 'ja-not-available' if not available*/}
                <div className='ja-available-lamp'></div>
              </div>
            </div>
            {/* avatar end */}
            {/* name */}
            <h5 className='ja-name mb-10'>
              <Link href='/'>{AppData.profile.name}</Link>
            </h5>
            {/* post */}
            <div
              className='ja-sm-text'
              dangerouslySetInnerHTML={{ __html: AppData.profile.role }}
            />
            <a
              href={AppData.profile.resume}
              className='ja-link p-15-0'
              download
              data-no-swup
              target='_blank'
            >
              Download cv <i className='fas fa-download'></i>
            </a>
          </div>
          {/* info bar header end */}

          {/* scroll frame */}
          <div id='scrollbar2' className='ja-scroll-frame'>
            {/* info bar about */}
            <div className='ja-table p-15-15'>
              {/* about text */}
              <ul>
                {AppData.profile.info.map((item, key) => (
                  <li key={`profile-info-item-${key}`}>
                    <h6>{item.label}:</h6>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* info bar about end */}

            {/* divider */}
            <div className='ja-ls-divider'></div>

            {/* divider */}
            <div className='ja-ls-divider'></div>

            {/* hard skills */}
            <div className='ja-hard-skills p-30-15'>
              {AppData.profile.skills.hard.map((item, key) => (
                <div
                  className='ja-hard-skills-item'
                  key={`profile-skills-hard-item-${key}`}
                >
                  <div className='ja-skill-heading'>
                    {/* title */}
                    <h6>{item.label}</h6>
                  </div>
                  {/* progressbar frame */}
                  <div className='ja-line-progress'>
                    {/* progressbar */}
                    <div
                      id={`lineprog${key + 1}`}
                      className='ja-line-progress-item'
                      data-value={item.value}
                    />
                  </div>
                  {/* progressbar frame end */}
                </div>
              ))}
            </div>
            {/* language skills end */}

            {/* divider */}
            <div className='ja-ls-divider'></div>

            {/* knowledge list */}
            <ul className='ja-knowledge-list p-15-0'>
              {AppData.profile.skills.knowledge.map((item, key) => (
                <li key={`profile-skills-knowledge-item-${key}`}>{item.label}</li>
              ))}
            </ul>
            {/* knowledge list end */}

            {/* divider */}
          </div>
          {/* scroll frame end */}

          {/* sidebar social */}
          <div className='ja-ls-social'>
            {AppData.social.map((item, key) => (
              <a
                href={item.link}
                key={`profile-social-item-${key}`}
                target='_blank'
                title={item.title}
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
          {/* sidebar social end */}
        </div>
        {/* menu bar frame end */}
      </div>
      {/* info bar end */}

      <ImageView />
    </>
  );
};
export default InfoBarModule;

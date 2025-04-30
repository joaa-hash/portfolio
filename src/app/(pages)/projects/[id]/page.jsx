import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

import {
  getSortedProjectsData,
  getAllProjectsIds,
  getProjectData,
} from '@library/projects';

import CountersSection from '@components/sections/Counters';
import PartnersSection from '@components/sections/Partners';

const TestimonialSlider = dynamic(() => import('@components/sliders/Testimonial'), {
  ssr: false,
});
const ImagesFullSlider = dynamic(() => import('@components/sliders/ImagesFull'), {
  ssr: false,
});
const ImageFull = dynamic(() => import('@components/ImageFull'), { ssr: false });
const ImagesGallery = dynamic(() => import('@components/ImagesGallery'), { ssr: false });

import Link from 'next/link';

export async function generateMetadata({ params }) {
  const postData = await getSingleProjectData(params);

  return {
    title: postData.title + ' | Projects',
  };
}

async function ProjectDetail({ params }) {
  const postData = await getSingleProjectData(params);
  const projects = await getAllProjects();

  //prev next navigation
  let prev = { id: 0, key: 0 };
  let next = { id: 0, key: 0 };
  let first = { id: 0 };
  let last = { id: 0 };

  projects.forEach(function (item, key) {
    if (item.id == postData.id) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  });

  projects.forEach(function (item, key) {
    if (key == prev.key) {
      prev.id = item.id;
    }
    if (key == next.key) {
      next.id = item.id;
    }
    if (key == 0) {
      first.id = item.id;
    }
    if (key == projects.length - 1) {
      last.id = item.id;
    }
  });

  if (prev.key == -1) {
    prev.id = last.id;
  }
  if (next.key == projects.length) {
    next.id = first.id;
  }

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
                <h4>{postData.title}</h4>
              </div>
              {/* title frame end */}
              {/* right frame */}
              <div className='ja-right-frame'>
                <div className='ja-project-category'>{postData.category}</div>
              </div>
              {/* right frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}

      {postData.carousel !== undefined ? (
        <Suspense fallback={<div>Loading...</div>}>
          <ImagesFullSlider items={postData.carousel} />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <ImageFull src={postData.image} title={postData.title} />
        </Suspense>
      )}

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
                <h4>{postData.details.title}</h4>
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className='col-lg-8'>
            <div className='ja-a ja-card ja-fluid-card'>
              <h5 className='mb-15'>{postData.description.title}</h5>
              <div
                className='mb-15'
                dangerouslySetInnerHTML={{ __html: postData.description.content }}
              />
              {/* button */}
              {postData.description.button !== undefined && (
                <div className='ja-buttons-frame'>
                  <a
                    href={postData.description.button.link}
                    className='ja-link ja-color-link ja-w-chevron'
                    target='_blank'
                    data-no-swup
                  >
                    {postData.description.button.label}
                  </a>
                </div>
              )}
            </div>
          </div>
          {/* col end */}

          {/* col */}
          <div className='col-lg-4'>
            <div className='ja-a ja-card'>
              {/* table */}
              <div className='ja-table p-15-15'>
                <ul>
                  {postData.details.items.map((item, key) => (
                    <li key={`project-details-item-${key}`}>
                      <h6>{item.label}:</h6>
                      <span dangerouslySetInnerHTML={{ __html: item.value }} />
                    </li>
                  ))}
                </ul>
              </div>
              {/* table end */}
            </div>
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}

      {postData.gallery !== undefined && (
        <Suspense fallback={<div>Loading...</div>}>
          <ImagesGallery items={postData.gallery.items} title={postData.gallery.title} />
        </Suspense>
      )}

      <TestimonialSlider />

      <CountersSection />

      {/* container */}
      <div className='container-fluid'>
        {/* row */}
        <div className='row'>
          {/* col */}
          <div className='col-lg-12'>
            {/* call to action */}
            <div
              className='ja-a ja-banner'
              style={{ backgroundImage: 'url(/img/bg.jpg)' }}
            >
              {/* overlay */}
              <div className='ja-banner-overlay'>
                {/* main title */}
                <div className='ja-banner-title text-center'>
                  {/* title */}
                  <h1 className='mb-15'>Ready to order your project?</h1>
                  {/* suptitle */}
                  <div className='ja-lg-text ja-code mb-25'>Let's work together!</div>
                  {/* button */}
                  <Link href='/contact' className='ja-btn ja-btn-md'>
                    <span>Contact me</span>
                  </Link>
                </div>
                {/* main title end */}
              </div>
              {/* overlay end */}
            </div>
            {/* call to action end  */}

            {/* projects navigation */}
            <div className='ja-a ja-pagination'>
              {/* button */}
              {prev.id != 0 && (
                <Link
                  href={`/projects/${prev.id}`}
                  className='ja-link ja-color-link ja-w-chevron ja-left-link'
                >
                  <span>Previous project</span>
                </Link>
              )}
              <div className='ja-pagination-center ja-m-hidden'>
                <Link className='ja-link' href='/projects'>
                  All projects
                </Link>
              </div>
              {/* button */}
              {next.id != 0 && (
                <Link
                  href={`/projects/${next.id}`}
                  className='ja-link ja-color-link ja-w-chevron'
                >
                  <span>Next project</span>
                </Link>
              )}
            </div>
            {/* projects navigation end */}
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}

      <PartnersSection paddingTop={30} />
    </>
  );
}
export default ProjectDetail;

export async function generateStaticParams() {
  const paths = getAllProjectsIds();

  return paths;
}

async function getSingleProjectData(params) {
  const postData = await getProjectData(params.id);

  if (!postData) {
    notFound();
  } else {
    return postData;
  }
}

async function getAllProjects() {
  const allProjects = await getSortedProjectsData();

  return allProjects;
}

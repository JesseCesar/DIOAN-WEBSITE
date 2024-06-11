import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api';
import moment from 'moment';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews()
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          <h2 className="flex justify-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From DIAON</h2>
          <p className="flex justify-center mt-2 text-lg leading-8 text-gray-600">
            Here's what we've been up to
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((news) => (
            <article key={news._id} className="flex max-w-xl flex-col items-start justify-between">
              <div className='flex max-w-sm rounded'>
                <img src={news.image} alt="" className="h-40 w-80 rounded bg-gray-50" />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={news.createdAt} className="text-gray-500">
                  {moment(news.createdAt).format('MMMM Do YYYY')}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={news.href}>
                    <span className="absolute inset-0" />
                    {news.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{news.content}</p>
              </div>
            </article>
          ))}
        </div>
          {/* <div className='flex justify-end mt-5'>
            <button className='text-black'>
              View more</button>
          </div> */}
      </div>
    </div>
  );
};

export default News;

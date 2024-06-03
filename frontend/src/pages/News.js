import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api';

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
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((news) => (
            <article key={news._id} className="flex max-w-xl flex-col items-start justify-between">

              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={news.datetime} className="text-gray-500">
                  {news.date}
                </time>
                <a
                  href={news.title}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {news.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={news.href}>
                    <span className="absolute inset-0" />
                    {news.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{news.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={news.image} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={news.updatedAt}>
                      <span className="absolute inset-0" />
                      {news.createdAt}
                    </a>
                  </p>
                  <p className="text-gray-600">{news._id}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

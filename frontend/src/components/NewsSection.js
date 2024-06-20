import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`https://diaon.onrender.com/api/news`)
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  // use hook

  return (
    <div className="bg-white font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:py-6 py-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From DIAON</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Here's what we've been up to
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {news && news.length > 0 && news.slice(0, 3).map((newsItem) => (
            <article key={newsItem._id} className="flex flex-col items-start justify-between bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full">
                <img src={newsItem.image} alt="" className="h-40 w-full object-cover rounded-t-lg" />
              </div>
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <time dateTime={newsItem.createdAt} className="text-gray-500">
                  {moment(newsItem.createdAt).format('MMMM Do YYYY')}
                </time>
              </div>
              <div className="group relative mt-4">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                  <a href={`/news/${newsItem.id}`}>
                    <span className="absolute inset-0" />
                    {newsItem.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">{newsItem.content}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <Link to="/news" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
            View more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsSection

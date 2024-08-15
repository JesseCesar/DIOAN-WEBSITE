import React, { useEffect, useState } from 'react';
import moment from 'moment';
import DefaultImg from '../assets/default.jpg';
import { Link } from 'react-router-dom';


const News = () => {
  console.log('News component rendered');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = 'https://diaon.onrender.com'|| 'http://localhost:5000/api';

    fetch(`${API_URL}/news`)
      .then(response => {
        console.log(`Response status: ${response.status}, status text: '${response.statusText}'`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched:', data);
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error fetching news: {error.message}</p>;
  }

  return (
    <div className="bg-white pb-16 sm:pb-24 sm:pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">From DIAON</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Here's what we've been up to
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 border-gray-200 pt-5 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.length > 0 ? (
            news.map((newsItem) => (
              <article key={newsItem._id} className="flex flex-col items-start justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <div className='w-full rounded overflow-hidden'>
                  <img src={newsItem.image || DefaultImg}
                  alt="news"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = DefaultImg;
                  }}
                  />
                </div>
                <div className="mt-4 flex items-center gap-x-4 text-xs">
                  <time dateTime={newsItem.createdAt} className="text-gray-500">
                    {moment(newsItem.createdAt).format('MMMM Do YYYY')}
                  </time>
                </div>
                <div className="mt-3 group relative">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {newsItem.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 group-hover:text-gray-400 line-clamp-3">
                    {newsItem.content}
                  </p>
                </div>
                <Link to={`/news/${newsItem._id}`} className="text-green-500">Read more</Link>
              </article>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No news available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;

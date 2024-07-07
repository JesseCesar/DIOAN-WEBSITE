import React, { useEffect, useState } from 'react';
import moment from 'moment';

const News = () => {
  console.log('News component rendered');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/news`)
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          <h2 className="flex justify-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From DIAON</h2>
          <p className="flex justify-center mt-2 text-lg leading-8 text-gray-600">
            Here's what we've been up to
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.length > 0 ? (
            news.map((newsItem) => (
              <article key={newsItem._id} className="flex max-w-xl flex-col items-start justify-between">
                <div className='flex max-w-sm rounded'>
                  <img src={newsItem.image || 'default-image-url.jpg'} alt="news" className="h-40 w-80 rounded bg-gray-50" />
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={newsItem.createdAt} className="text-gray-500">
                    {moment(newsItem.createdAt).format('MMMM Do YYYY')}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {newsItem.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 group-hover:text-gray-400">
                    {newsItem.content}
                  </p>
                </div>
              </article>
            ))
          ) : (
            <p>No news available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;

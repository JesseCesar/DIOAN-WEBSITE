import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const NewsView = () => {
  const [news, setNews] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { id } = useParams();
  console.log('News component rendered');

  useEffect(() => {
    fetch(`https://diaon.onrender.com/api/news/${id}`)
      .then(response => {
        console.log(`Response status: ${response.status}, status text: '${response.statusText}'`);
        return response.json();
      })
      .then(data => {
        setNews(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, [id]);

  // if (loading) return <p>Loading article...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <div className='py-4 font-poppins text-center'>
      <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>{news.title}</h1>
      <div className='my-4 items-center gap-x-4 text-xs'>
        <time dateTime={news.createdAt} className='text-gray-500'>
          {moment(news.createdAt).format('MMMM Do YYYY')}
        </time>
      </div>
      <div className='my-4 justify-center'>
        <img
          className='h-96 w-3/4 rounded-lg object-cover object-center'
          src={news.image}
          alt=''
        />
      </div>
      <span>{news.content}</span>
    </div>
  );
};

export default NewsView;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DefaultImg from '../assets/default.jpg';
import DeleteNews from './DeleteNews';

const NewsView = () => {
  const [news, setNews] = useState({});
  const { id } = useParams();
  const { authUser } = useAuthContext();

  useEffect(() => {
    fetch(`http://localhost:5000/api/news/${id}`)
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

  return (
    <div className='py-8 font-poppins bg-gray-50 text-center'>
      <div className='max-w-4xl mx-auto px-6 lg:px-8'>
        <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>{news.title}</h1>
        <div className='my-4 text-gray-500 text-sm'>
          <time dateTime={news.createdAt}>
            {moment(news.createdAt).format('MMMM Do YYYY')}
          </time>
        </div>
        <div className='my-8 flex justify-center'>
          <img
            className='w-full max-w-3xl h-auto rounded-lg shadow-lg object-cover'
            src={news.image || DefaultImg}
            alt='News'
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DefaultImg;
            }}
          />
        </div>
        <div className='text-left px-4 lg:px-0'>
          <p className='text-lg leading-8 text-gray-700'>
            {news.content}
          </p>
        </div>
      </div>
      {authUser ? (
        <>
          <Link to={`/news/edit/${news._id}`} className="text-green-500 px-2">Edit News</Link>
           <DeleteNews newsId={news._id} />
        </>
      ) : (
        <p>News</p>
      )}
    </div>
  );
};

export default NewsView;

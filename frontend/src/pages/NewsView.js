import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNews } from '../api';

const NewsView = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetchNews(id)
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news:', error));
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <img src={news.image} alt={news.title} className="w-full h-auto mb-4" />
      <p>{news.content}</p>
    </div>
  );
};

export default NewsView;

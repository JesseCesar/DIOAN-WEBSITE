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
    <div>
      <h1>News one</h1>
      <ul>
        {news.map(article => (
          <li key={article._id}>
            <strong>{article.title}</strong>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;

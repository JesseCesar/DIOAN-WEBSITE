import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/news/${id}`);
        setContent(response.data.content);
        setImage(response.data.image);
        setTitle(response.data.title);
      } catch (error) {
        alert('An error happened. Please check the console.');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  const handleEditNews = async () => {
    const data = { title, content, image };
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/news/${id}`, data);
      navigate('/');
    } catch (error) {
      alert('An error happened. Please check the console.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-4'>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Image URL</label>
          <input
            type='text'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button
          className='p-2 bg-sky-300 m-8'
          onClick={handleEditNews}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default EditNews;

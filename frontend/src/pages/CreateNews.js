import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveNews = () => {
    const data = {
      title,
      content,
      image,
    };
    setLoading(true);
    axios
      .post('http://localhost:5000/news', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('News created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error creating news', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Create News</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            rows="5"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8"
          onClick={handleSaveNews}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default CreateNews;

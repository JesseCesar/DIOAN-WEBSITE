import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import background from '../assets/file.png'
// import { useSnackbar } from 'notistack';

const CreateNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const { enqueueSnackbar } = useSnackbar();

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
        // enqueueSnackbar('News created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // enqueueSnackbar('Error creating news', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${background})` }}>
      <div className="p-4 font-poppins">
        <h1 className="text-3xl my-4 text-center text-white">Create News</h1>
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto bg-white">
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Title</label>
            <input
              type="text"
              required
              placeholder="Example title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Content</label>
            <textarea
              required
              placeholder="An example story"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
              rows="5"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Image URL</label>
            <input
              type="text"
              required
              placeholder="Example URL... https://example.com/image.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
            />
          </div>
          <button
            className="flex w-1/2 justify-center mx-auto rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-black"
            onClick={handleSaveNews}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNews;

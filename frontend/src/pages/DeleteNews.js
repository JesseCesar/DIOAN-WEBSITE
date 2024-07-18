import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios if not already done
import toast from 'react-hot-toast';

const DeleteNews = ({ newsId }) => {
  const [status, setStatus] = useState('');

  const deleteNews = async () => {
    try {
      // Assuming your backend endpoint for deleting news is /api/news/:id
      // Replace `http://localhost:5000` with your actual backend server address
      const response = await axios.delete(`/api/news/${newsId}`);
      toast.success('News deleted successfully');
      setStatus('News deleted successfully');
    } catch (error) {
      console.error("Error deleting news", error);
      setStatus('Failed to delete news');
    }
  };

  return (
    <div>
      <button onClick={deleteNews}>Delete News</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default DeleteNews;

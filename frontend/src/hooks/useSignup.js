import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const signup = async ({ fullName, email, password, confirmPassword, passcode }) => {
    const success = hundleInputErrors({ fullName, email, password, confirmPassword, passcode });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password, confirmPassword, passcode }), // Passcode added here
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Store user data in local storage
      localStorage.setItem('dioan-user', JSON.stringify(data));
      // Update context with authenticated user
      setAuthUser(data);

      // Redirect to home page
      navigate('/');
    } catch (error) {
      console.log(error);
      if (error.message === 'User already exists') {
        toast.error('This email is already in use');
      } else if (error.message === 'Invalid email address') {
        toast.error('Invalid email');
      } else if (error.message === 'Invalid passcode') {
        toast.error('The passcode is incorrect'); // Handle passcode error
      } else {
        toast.error('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
}

export default useSignup;

function hundleInputErrors({ fullName, email, password, confirmPassword, passcode }) {
  if (!fullName || !email || !password || !confirmPassword || !passcode) {
    toast.error('Please fill all the fields');
    return false;
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return false;
  }

  if (password.length < 6) {
    toast.error('Password should be at least 6 characters long');
    return false;
  }

  if (passcode.length < 4) {
    toast.error('Passcode should be at least 4 characters long'); // Validate passcode
    return false;
  }

  return true;
}


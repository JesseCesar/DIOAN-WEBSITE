import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    const success = hundleInputErrors({ email, password });
    if (!success) return;

    setLoading(true)
    try {
      const res = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }

      //localstorage
      localStorage.setItem('dioan-user', JSON.stringify(data))
      console.log(data);
      // context
      setAuthUser(data);

      // Redirect to home page
      navigate('/');

    } catch (error) {
      console.log(error)
      if (error.message === 'Invalid credentials') {
        toast.error('Invalid credentials')
      } else {
        toast.error(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return { loading, login }
}

export default useLogin

function hundleInputErrors({ email, password }) {
  if (!email || !password) {
    toast.error('Please fill all the fields')
    return false
  }


  return true
}

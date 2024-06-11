import React, { useState } from 'react'
import logo from '../assets/logo-black.png'
import background from '../assets/file.png'
import { Link } from 'react-router-dom'
import useLogin  from '../hooks/useLogin'

const LogIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login({email, password})
  }

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div>
      <div className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link to='/'>
              <img className='mx-auto h-15 w-20' src={logo} alt='DIOAN' />
            </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Log in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="   example@example.com"
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder='   *********'
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='flex flex-row justify-between mt-3'>
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 "
                    />
                    <label className="text-sm font-normal cursor-pointer text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <span className="font-normal cursor-pointer text-gray-600 hover:text-indigo-500">
                    <Link to="/forgotpassword">Forgot Password?</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-1/2 justify-center mx-auto rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={loading}
                >
                  {loading ? <span className="loading loading-spinner"></span> : "Login"}
                </button>
              </div>
              <div className="text-sm flex justify-center">
                <span className='text-gray-600'>
                  Don't have an account?
                </span>
                <Link href="#" className="font-semibold text-white hover:text-indigo-500 mx-1" to="/sign-up">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn

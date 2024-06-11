import React from 'react'
import logo from '../assets/logo-black.png'
import background from '../assets/file.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <div class="bg-cover bg-center h-screen font-poppins"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link to='/'>
              <img className='mx-auto h-15 w-20' src={logo} alt='DIOAN' />
            </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign up for an account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Fullname
                </label>
                <div className="mt-2">
                  <input
                    id="string"
                    name="string"
                    type="string"
                    autoComplete="string"
                    placeholder='   Jane Doe'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
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
                    placeholder='   example@example.com'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    placeholder='   *********'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-1/2 justify-center mx-auto rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
              <div className="text-sm flex justify-center">
                <span className='text-gray-600'>
                  Already have an account?
                </span>
                <Link href="#" className="font-semibold text-white hover:text-indigo-500 mx-1" to="/log-in">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;

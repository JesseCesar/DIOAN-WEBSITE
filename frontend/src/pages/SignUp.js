import React from 'react'
import logo from '../assets/logo-black.png'
import background from '../assets/file.png'
import { Link } from 'react-router-dom'
import { useState } from "react"
import useSignup  from "../hooks/useSignup"



const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const {loading, signup} = useSignup();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }
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
              Sign up for an account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Fullname
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    autoComplete="string"
                    placeholder='   Jane Doe'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={inputs.fullName}
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='example@example.com'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={inputs.email}
                    onChange={(e) => setInputs({...inputs, email: e.target.value})}
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
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder='   *********'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Confirm  Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder='   *********'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                  />
                </div>
              </div>

              <div>
              <button
  type="submit"
  style={{backgroundColor: 'blue', color: 'white'}}
  className="w-full mt-2"
  disabled={loading}
>
  {loading ? <span className="loading loading-spinner"></span> : "Signup"}
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

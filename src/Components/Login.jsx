import React from 'react'
import { Link } from 'react-router-dom'
 function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-8 bg-black text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome back</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="m@example.com"
              className="w-full px-4 py-2 rounded bg-black text-gray-200 border border-gray-600 focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded bg-black text-gray-200 border border-gray-600 focus:outline-none "
            />
            <div className="text-right mt-1">
              
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-white hover:bg-gray-200 text-black font-semibold rounded transition"
          >
            Login
          </button>
        </form>
        <div className="my-6 flex items-center">
       
          
         
        </div>
        
        <p className="text-center text-white mt-6">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
export default Login

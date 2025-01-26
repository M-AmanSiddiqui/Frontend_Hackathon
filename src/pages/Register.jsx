import React from 'react'
import { Link } from 'react-router-dom'
 function Register() {
  return (
    <div>  
          <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-8 bg-black text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Create an account</h2>
       
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
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 rounded bg-black text-gray-200 border border-gray-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4  text-black bg-white font-semibold rounded transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-white mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}
export default Register
import React from 'react'

 function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome back</h2>
        <p className="text-center text-gray-400 mb-6">
          Login to your Acme Inc account
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="m@example.com"
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          >
            Login
          </button>
        </form>
        <div className="my-6 flex items-center">
       
          
         
        </div>
        
        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
export default Login

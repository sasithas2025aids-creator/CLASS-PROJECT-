
import { useState } from 'react';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function formsubmit(e) {
    e.preventDefault();

    console.log({
      email,
      password
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-off max-w-sm bg-white p-8 rounded-lg shadow-md">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={formsubmit}>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Email ID
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-md outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-md outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;

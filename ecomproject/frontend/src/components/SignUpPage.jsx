import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, User, Mail } from 'lucide-react';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <User className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-2 bg-transparent outline-none"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <Mail className="h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-2 bg-transparent outline-none"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <Lock className="h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-2 bg-transparent outline-none"
              required
            />
          </div>
          <Link to='/'>
        
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
          </Link>
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="ml-1 font-medium text-blue-500 hover:text-blue-600"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

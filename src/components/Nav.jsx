import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-white-200 border-b border-gray-300 shadow-lg p-4 py-2 z-10 text-white flex justify-between items-center">
   
      <Link to="/" className="flex items-center space-x-2 text-white">
        <div className="bg-black ml-16 rounded p-2">
          <span className="font-bold">DEV</span>
        </div>
        
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M21 21l-4.35-4.35M14.3 17A7.7 7.7 0 1 0 6.3 9 7.7 7.7 0 0 0 14.3 17z"></path>
            </svg>
          </button>
        </span>
        <input type="search" name="q" className="py-2 text-sm text-black bg-whhite border border-gray-300 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off" />
      </div>
      </Link>

      <div className="flex space-x-4 mr-14">
        <Link to="/login" className="hover:underline text-black hover:text-indigo hover:bg-indigo-200 py-2 px-4 rounded mt-1">
          Log in
        </Link>
        <Link to="/create-account" className="bg-white border border-indigo-500 hover:bg-indigo-700 text-indigo-700 hover:text-white font-bold py-2 px-4 rounded">
  Create Account
</Link>

      </div>
    </nav>
  );
};

export default Nav;

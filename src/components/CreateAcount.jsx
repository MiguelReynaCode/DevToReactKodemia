import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
 

  return (
    <div className="flex flex-col items-center p-16 justify-center min-h-screen ">
      <div className="w-full max-w-xl p-8 bg-white rounded-2 text-center">
      <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--AOunT8g5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://thepracticaldev.s3.amazonaws.com/i/78hs31fax49uwy6kbxyw.png"
              alt="Dev Community Logo"
              className="mx-auto mb-4 w-16 h-16"
            />
        <h2 className="text-3xl font-bold mb-6">Join the DEV Community</h2>
        <p className="mb-6 text-gray-600">DEV Community is a community of 1,234,538 amazing developers</p>

       
        <div className="space-y-4 mb-16">
  <button className="w-full flex items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200">
    <span className="flex-grow flex justify-start">
      <img src="https://i0.wp.com/aldiachile.microjuris.com/wp-content/uploads/2016/08/apple_logo_black-svg.png?fit=2000%2C2000&ssl=1" alt="Apple Logo" className="h-6" />
    </span>
    <span className="flex-grow flex justify-center">
      Sign up with Apple
    </span>
    <span className="flex-grow"></span>
     
  </button>
  

<button className="w-full flex items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200">
    <span className="flex-grow flex justify-start">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Apple Logo" className="h-6" />
    </span>
    <span className="flex-grow flex justify-center">
      Sign up with GitHub
    </span>
    <span className="flex-grow"></span> 
  </button>  <button className="w-full flex items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200">
    <span className="flex-grow flex justify-start">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Apple Logo" className="h-6" />
    </span>
    <span className="flex-grow flex justify-center">
      Sign up with Twitter
    </span>
    <span className="flex-grow"></span> 
  </button>  <button className="w-full flex items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200">
    <span className="flex-grow flex justify-start">
      <img src="https://cdn.iconscout.com/icon/free/png-256/free-email-529-431258.png" alt="Apple Logo" className="h-6" />
    </span>
    <span className="flex-grow flex justify-center">
      Sign up with Email
    </span>
    <span className="flex-grow"></span> 
  </button>
  <p className="text-sm my-4 border-b pb-6 border-gray-300 text-gray-500">By signing up, you agree to our privacy policy, terms of use and code of conduct.</p>
       

       <p className="text-sm  my-4">
         Already have an account? <Link to="/login" className="text-blue-600 hover:text-blue-800">Log in.</Link>
       </p>
        </div> 
        </div>
      </div>
   
  );
}

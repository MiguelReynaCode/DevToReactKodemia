import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
  }

  return (
    <div className="flex flex-col items-center mt-24 justify-center p-4">
      <div className="w-full max-w-md">
        <form className="bg-white " onSubmit={handleSubmit}>
          <div className="mb-4">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--AOunT8g5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://thepracticaldev.s3.amazonaws.com/i/78hs31fax49uwy6kbxyw.png"
              alt="Dev Community Logo"
              className="mx-auto mb-4 w-16 h-16"
            />
            <p className="text-center font-bold  text-2xl my-2">
              Join the DEV Community
            </p>
            <p className="text-center text-gray-600 text-xs ">
              DEV Community is a community of 1,225,013 amazing developers
            </p>
            <label
              className="block text-gray-700 text-sm font-bold my-3 mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between items-center mt-3">
              <label className="flex items-center mr-10">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="form-checkboh-4 w-4"
                />
                <span className="ml-2 text-gray-500 text-xs italic">
                  Remember me
                </span>
              </label>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-10"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs mt-3">
          &copy;2024 Dev Community. All rights reserved.
        </p>
      </div>
    </div>
  );
}
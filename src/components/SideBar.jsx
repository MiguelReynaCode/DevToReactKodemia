
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
      <aside className="w-64 px-4 py-6  ml-16 mt-2 bg-gray-200 rounded-lg ">
        <div className="rounded-lg border border-gray-300  bg-white p-4" >
            <p className="font-bold">DEV Community is a community of 1,232,991 amazing developers</p>
            <p className="my-2">We're a place where coders share, stay up-to-date and grow their careers.</p>
            <div className="flex flex-col ">

        <Link to="/create-account" className="bg-white flex items-center justify-center  border border-indigo-500 hover:bg-indigo-700 text-indigo-700 hover:text-white font-bold py-2 px-4 rounded">
          Create account
        </Link>    
        <Link to="/login" className="flex items-center justify-center hover:underline my-2 text-black hover:text-indigo hover:bg-indigo-200 py-2 px-4 rounded mt-1">
          Log in
        </Link>
        
        </div>
     
        </div>

            
        
        <nav className="flex mt-4 ml-2 flex-col space-y-4">
         
          
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            🏠 Home
          </a>
        
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            🎧 Podcasts
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            🎥 Videos
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            🏷 Tags
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            💡 FQA
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            🛍️ Forem Shop
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            💖 Advertise on Dev
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            🔲 About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            📯 Contact
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            📖 Guides
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            🤔 Shoftware comparasions
          </a>
          <h3 className='text-xl font-semibold -pv-4'>Other</h3>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            👍 Code of Conduct
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            🤓 Privacy Policy
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            👀 Terms of use
          </a>
        </nav>
  
        <div className="mt-6">
          <h3 className="text-xl font-semibold pb-4">Popular Tags</h3>
          {/* Simular tags */}
          <div className="flex flex-wrap gap-2">
            {['javascript', 'react', 'css', 'html', 'nodejs'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-200 text-sm rounded-full cursor-pointer hover:bg-gray-300">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    );
  };
  export default SideBar;
  

const RightSideBar = () => {
    return (
      <aside className="w-64 px-4 py-6 mr-16 mt-6 mb-4 bg-white border border-gray-300 rounded-lg">
     
        <div className="mb-8 ">
          <h3 className="text-xl mb-2 font-semibold border-b pb-2"># Tags populares</h3>
          <div className="flex flex-wrap gap-2">
           
            {['javascript', 'webdev', 'react', 'css', 'tutorial'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-200 text-sm rounded-full cursor-pointer hover:bg-gray-300">
                #{tag}
              </span>
            ))}
          </div>
        </div>
  
        <div className="mb-8">
          <h3 className="text-xl mb-2 font-semibold border-b pb-2">Who to follow</h3>
         
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-2"
                  src={`https://i.pravatar.cc/150?img=${i}`}
                  alt="User avatar"
                />
                <div>
                  <h4 className="text-sm font-semibold">User Name</h4>
                  <button className="text-xs text-blue-600 hover:underline">Follow</button>
                </div>
              </div>
            ))}
          </div>
        </div>
  
      
      </aside>
    );
  };
  export default RightSideBar;
  
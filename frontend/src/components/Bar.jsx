// components/Bar.jsx

const Bar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md bg-opacity-70 fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-extrabold text-cyan-400 drop-shadow-glow">
              SafeMap
            </h1>
            <span
              className="
                text-2xl font-extrabold
                bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                bg-clip-text text-transparent
                animate-gradient
                bg-[length:200%_200%]
              "
            >
              - Real Time Disaster Map
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition duration-200">About</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition duration-200">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
  
  export default Bar;
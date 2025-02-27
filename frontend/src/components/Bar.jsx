const Bar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 backdrop-blur-md bg-opacity-80 fixed top-0 w-full z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-extrabold text-cyan-300 drop-shadow-glow">
              SafeMap
            </h1>
            <span
              className="
                text-2xl font-extrabold
                bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400
                bg-clip-text text-transparent
                animate-gradient
                bg-[length:200%_200%]
              "
            >
              - Real Time Disaster Map
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="relative text-gray-300 hover:text-white transition duration-200 px-4 py-2 rounded-lg bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md hover:shadow-lg hover:bg-opacity-50">
              About
            </a>
            <a href="#" className="relative text-gray-300 hover:text-white transition duration-200 px-4 py-2 rounded-lg bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md hover:shadow-lg hover:bg-opacity-50">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Bar;

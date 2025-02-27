const prov_bar = () => {
    return (
      <nav className="bg-[#101820] backdrop-blur-lg bg-opacity-90 fixed top-0 w-full z-50 shadow-lg border-b border-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <h1 className="
                  text-2xl font-semibold
                  bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500
                  bg-clip-text text-transparent
                  animate-gradient
                  bg-[length:200%_200%]
                "
              >
                <svg 
                className="w-8 h-8 text-cyan-500"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
                safeMap - Global Disaster Monitoring System
              </h1>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default prov_bar;
  
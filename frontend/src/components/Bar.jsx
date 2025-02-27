import CountUp from 'react-countup';

const Bar = ({ isFlat }) => {
  return (
    <nav className="bg-[#101820] backdrop-blur-lg bg-opacity-90 fixed top-0 w-full z-50 shadow-lg border-b border-cyan-500">
      <div className="w-full px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
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
            <div className="ml-2">
              <h1 className="text-xl font-bold text-white tracking-wide">
                SafeMap <span className="text-sm font-medium text-cyan-400">Global Disaster Monitoring System</span>
              </h1>
            </div>
          </div>

          {isFlat && (
            <div className="flex items-center text-white">
              <span className="mr-2">Disasters today:</span>
              <span className="text-cyan-400 font-bold text-xl">
                <CountUp 
                  end={500} 
                  duration={2.5}
                  separator="," 
                />
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Bar;

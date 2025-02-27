import { Link } from 'react-router-dom';
import { faInfoCircle, faEnvelope, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FloatingButtons = ({ isFlat }) => {
  return isFlat ? (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-end gap-4 z-50">
      <Link
        to="/about"
        className="relative w-12 hover:w-32 h-12 rounded-full bg-cyan-600 hover:bg-cyan-700 
                   flex items-center px-3 transition-all duration-300 shadow-lg group"
        title="About"
      >
        <FontAwesomeIcon 
          icon={faInfoCircle} 
          className="text-white text-xl absolute left-4 top-1/2 transform -translate-y-1/2"
        />
        <span className="text-white opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 whitespace-nowrap ml-8">
          About
        </span>
      </Link>

      <Link
        to="/contact"
        className="relative w-12 hover:w-36 h-12 rounded-full bg-purple-600 hover:bg-purple-700 
                   flex items-center px-3 transition-all duration-300 shadow-lg group"
        title="Contact"
      >
        <FontAwesomeIcon 
          icon={faEnvelope} 
          className="text-white text-xl absolute left-4 top-1/2 transform -translate-y-1/2"
        />
        <span className="text-white opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 whitespace-nowrap ml-8">
          Contacts
        </span>
      </Link>

      <Link
        to="/statistics"
        className="relative w-12 hover:w-36 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 
                   flex items-center px-3 transition-all duration-300 shadow-lg group"
        title="Statistics"
      >
        <FontAwesomeIcon 
          icon={faChartBar} 
          className="text-white text-xl absolute left-4 top-1/2 transform -translate-y-1/2"
        />
        <span className="text-white opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 whitespace-nowrap ml-8">
          Statistics
        </span>
      </Link>
    </div>
  ) : null;
};

export default FloatingButtons;

import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaCheckCircle,
  FaPlayCircle,
  FaHourglassHalf,
  FaRegCalendarAlt,
} from 'react-icons/fa';


const statusStyles = {
  Active: {
    color: 'text-green-600',
    bg: 'bg-green-100',
    icon: <FaCheckCircle className="mr-1" />,
  },
  Ongoing: {
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
    icon: <FaHourglassHalf className="mr-1" />,
  },
  Completed: {
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    icon: <FaPlayCircle className="mr-1" />,
  },
  Planned: {
    color: 'text-purple-600',
    bg: 'bg-purple-100',
    icon: <FaRegCalendarAlt className="mr-1" />,
  },
};

const ViewCard = ({ viewdata }) => {
  const status = viewdata.status;
  const statusStyle = statusStyles[status] || statusStyles.Planned;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300">
      {/* Fixed-size image wrapper */}
      <div className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={viewdata.image}
          alt={viewdata.title}
        />
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{viewdata.title}</h2>
        <p className="text-gray-600 mt-2">{viewdata.description}</p>

        <div className="flex items-center justify-between mt-4">
          <span
            className={`text-sm px-3 py-1 rounded-full inline-flex items-center ${statusStyle.bg} ${statusStyle.color}`}
          >
            {statusStyle.icon}
            {status}
          </span>

          <span className="text-sm text-blue-600 flex items-center">
            <FaEnvelope className="mr-1" />
            {viewdata.contactInfo}
          </span>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500 font-medium">
            Division: {viewdata.division}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          <Link to={`/donation/${viewdata.id}`} >
          Know More
        </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;

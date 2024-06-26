import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine } from 'react-icons/fa';
import './WelcomePage.css';  // Create this CSS file for custom styles

const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <FaChartLine className="text-7xl mb-4 animate-bounce" />
      <h1 className="text-6xl font-bold mb-8">Welcome to Our Dashboard</h1>
      <Link to="/dashboard">
        <button className="bg-white text-blue-700 font-bold py-2 px-8 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}

export default WelcomePage;

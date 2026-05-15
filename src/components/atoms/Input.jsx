import React from 'react';

const Input = ({ type = 'text', className = '', ...props }) => {
  return (
    <input
      type={type}
      className={`w-full px-4 py-2 text-sm bg-transparent border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent ${className}`}
      {...props}
    />
  );
};

export default Input;

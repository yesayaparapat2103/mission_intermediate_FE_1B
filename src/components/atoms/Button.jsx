import React from 'react';

const Button = ({ children, type = 'button', variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'w-full text-sm font-medium py-2 px-4 rounded-full transition duration-200 flex justify-center items-center gap-2';
  
  const variants = {
    primary: 'bg-[#0F1E93] hover:bg-[#4A4B4C] text-white',
    outline: 'bg-transparent border border-gray-600 hover:bg-gray-800 text-white',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

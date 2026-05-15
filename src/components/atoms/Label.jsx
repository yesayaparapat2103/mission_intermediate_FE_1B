import React from 'react';

const Label = ({ children, htmlFor, className = '', ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-white mb-2 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;

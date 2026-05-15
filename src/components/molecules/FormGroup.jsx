import React, { useState } from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import iconMata from '../../assets/icon-mata.png';

const FormGroup = ({ label, type = 'text', id, placeholder, value, onChange, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="mb-4">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative flex items-center">
        <Input
          type={isPassword && showPassword ? 'text' : type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={isPassword ? 'pr-12' : ''}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 hover:text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={iconMata} alt="Toggle Password Visibility" className="h-5 w-5 opacity-70 hover:opacity-100 transition-opacity" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormGroup;

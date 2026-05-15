import React, { useState } from 'react';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import logoGoogle from '../../assets/logogoogle.png';

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-[380px] bg-[#181A1CD6]/90 p-6 md:p-8 rounded-[16px] shadow-xl backdrop-blur-sm border border-gray-800 mt-[-30px]">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="CHILL Logo" className="h-8" />
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Masuk</h2>
        <p className="text-gray-400 text-sm">Selamat datang kembali!</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <FormGroup
          label="Username"
          type="text"
          id="username"
          name="username"
          placeholder="Masukkan username"
          value={formData.username}
          onChange={handleChange}
        />
        
        <FormGroup
          label="Kata Sandi"
          type="password"
          id="password"
          name="password"
          placeholder="Masukkan kata sandi"
          value={formData.password}
          onChange={handleChange}
        />
        
        <div className="flex justify-between items-center mt-2 mb-6 text-sm">
          <p className="text-gray-400">
            Belum punya akun?{' '}
            <Link to="/register" className="text-white hover:underline font-medium">
              Daftar
            </Link>
          </p>
          <Link to="/forgot-password" className="text-gray-400 hover:text-white hover:underline">
            Lupa kata sandi?
          </Link>
        </div>
        
        <Button type="submit">Masuk</Button>
      </form>

      <div className="my-6 flex items-center justify-between">
        <span className="text-xs text-center mx-auto text-gray-500">Atau</span>
      </div>

      <div>
        <Button variant="outline" type="button">
          <img src={logoGoogle} alt="Google" className="h-5 w-5 mr-2" />
          Masuk dengan Google
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;

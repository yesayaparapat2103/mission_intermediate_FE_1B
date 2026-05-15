import React from 'react';
import RegisterForm from '../components/organisms/RegisterForm';
import backgroundImage from '../assets/image-background.jpg';

const RegisterPage = () => {
  const handleRegister = (data) => {
    console.log('Register data:', data);
    // Di sini nantinya kita bisa tambahkan logika ke API
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center p-4 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="z-10 w-full flex justify-center">
         <RegisterForm onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterPage;

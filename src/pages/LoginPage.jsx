import React from 'react';
import LoginForm from '../components/organisms/LoginForm';
import backgroundImage from '../assets/image-background.jpg';

const LoginPage = () => {
  const handleLogin = (data) => {
    console.log('Login data:', data);
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center items-center p-4 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="z-10 w-full flex justify-center">
         <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;

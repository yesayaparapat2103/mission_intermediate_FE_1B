import React from 'react';
import LoginForm from '../components/organisms/LoginForm';
import backgroundImage from '../assets/image-background.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try{
      const response = await axios.post('http://localhost:5000/api/auth/login',{
        email: data.email,
        password: data.password,
      });

      if(response.status === 200){
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        if(user && user.username){
          localStorage.setItem('username', user.username);
        }
        navigate("/home");
      }
    }
    catch (error){
      console.error("Login gagal", error);
      const errorMessage = error.response?.data?.message || "Email atau password salah!";
      alert(errorMessage);
    }
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

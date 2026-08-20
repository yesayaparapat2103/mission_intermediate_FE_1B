import RegisterForm from '../components/organisms/RegisterForm';
import backgroundImage from '../assets/image-background.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleRegister = async (data) => {
    if (data.password !== data.confirmPassword){
      alert("Kata sandi dan konfirmasi kata sandi tidak cocok!");
      return;
    } 
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register',{
        username: data.username,
        email: data.email,
        password: data.password,
      });

      if (response.status === 201) {
        alert("Akun berhasil dibuat! Silahkan login.");
        navigate("/");
      }
    } catch (error) {
      console.error("register Gagal", error);
      const errorMessage = error.response?.data?.message || "Gagal membuat akun!";
      alert(errorMessage);
    }
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

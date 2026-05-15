import React from 'react';
import Button from '../atoms/Button';
import heroBg from '../../assets/gambar1.png';
import volumeOff from '../../assets/volume-off.png';

const Hero = () => {
  return (
    <div className="relative lg:w-full lg:h-[100vh] md:h-[665px] max-h-[600px] flex items-center">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-x-0 bottom-0 top-[60%] bg-gradient-to-b from-transparent via-[#101213DB] to-[#181A1C]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-24 mt-24 md:mt-48">
        <h1 className="text-2xl -translate-y-8   md:text-5xl lg:text-[56px] font-bold text-white mb-3 md:mb-6 leading-tight max-w-3xl">
          Duty After School
        </h1>
        {/* Teks untuk Desktop (Disembunyikan di Mobile) */}
        <p className="hidden md:block text-gray-200 text-base lg:text-[17px] mb-8 max-w-2xl leading-relaxed">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
        </p>
        {/* Teks untuk Mobile (Disembunyikan di Desktop) */}
        <p className="block md:hidden -translate-y-8 text-gray-200 text-xs mb-6 max-w-2xl leading-relaxed">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut... 
        </p>
        
        <div className="flex -translate-y-10 md:translate-y-0 items-center justify-between w-full">
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <Button variant="primary" className="!w-auto px-5 md:px-8 py-[4px] md:py-2.5  border-none text-white font-medium text-sm md:text-base">
              Mulai
            </Button>
            <Button variant="primary" className="!w-auto flex items-center gap-1 md:gap-2 px-3 md:px-5 py-[4px] md:py-2 bg-[#2B2B2B] hover:bg-[#3B3B3B] border-none text-white font-medium text-sm md:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 opacity-90">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              Selengkapnya
            </Button>
            <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full border border-gray-400 text-gray-300 text-xs md:text-sm font-medium ml-1 md:ml-2 shrink-0">
              18+
            </div>
          </div>

          {/* Mute Button */}
          <button className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 mr-2 md:mr-8 transition shrink-0">
            <img src={volumeOff} alt="Mute" className="w-6 h-6 md:w-10 md:h-10 opacity-80 hover:opacity-100 transition" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

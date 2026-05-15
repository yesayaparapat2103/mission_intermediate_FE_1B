import React from 'react';
import logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#181A1C] mt-[-50px] border-t border-gray-800 px-4 md:px-12 lg:px-24 py-8">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
        {/* Bagian Kiri: Logo & Copyright */}
        <div className="flex flex-col gap-3">
          <img src={logo} alt="CHILL" className="h-6 md:h-8 object-contain self-start mb-2" />
          <p className="text-gray-400 text-xs md:text-sm">
            @2023 Chill All Rights Reserved
          </p>
        </div>

        {/* Bagian Kanan: Links (Mobile) */}
        <div className="flex flex-col gap-4 md:hidden">
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-white text-sm font-medium hover:text-gray-300 transition">
              Genre
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-white text-sm font-medium hover:text-gray-300 transition">
              Bantuan
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>

        {/* Bagian Kanan: Links (Desktop) */}
        <div className="hidden md:flex gap-16 lg:gap-24 w-full md:w-auto mt-6 md:mt-0">
          {/* Genre Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-base">Genre</h3>
            <div className="grid grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-3">
              {/* Row 1 */}
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Aksi</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Drama</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Komedi</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Sains & Alam</span>
              
              {/* Row 2 */}
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Anak-anak</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Fantasi Ilmiah & Fantasi</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Petualangan</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Thriller</span>
              
              {/* Row 3 */}
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Anime</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Kejahatan</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Perang</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition"></span>
              
              {/* Row 4 */}
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Britania</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">KDrama</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Romantis</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition"></span>
            </div>
          </div>

          {/* Bantuan Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-base">Bantuan</h3>
            <div className="flex flex-col gap-3">
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">FAQ</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Kontak Kami</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Privasi</span>
              <span className="text-[#C1C2C4] text-sm hover:text-white cursor-pointer transition">Syarat & Ketentuan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

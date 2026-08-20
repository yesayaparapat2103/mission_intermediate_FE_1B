import React, { useState } from 'react';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import MovieCard from '../components/molecules/MovieCard';

const WatchlistPage = ({ watchlist, addToWatchlist, removeMovieFromWatchList }) => {
  const [activeMovieId, setActiveMovieId] = useState(null);

  return (
    <div className="min-h-screen bg-[#181A1C] text-white flex flex-col relative">
      <Navbar />
      
      <main className="flex-1 px-4 md:px-6 lg:px-12 py-8 lg:mx-14">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Daftar Saya</h1>
        
        {watchlist.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-4 gap-y-20 py-10">
            {watchlist.map((movie) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onRemoveFromWatchlist={removeMovieFromWatchList}
                isWatchlistPage={true}
                isActive={activeMovieId === movie.id}
                onToggle={() => setActiveMovieId(activeMovieId === movie.id ? null : movie.id)}
                widthClass="w-full"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4 opacity-20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg">Belum ada film di daftar kamu.</p>
            <p className="text-sm mt-2">Tambahkan film favoritmu dari halaman utama!</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WatchlistPage;

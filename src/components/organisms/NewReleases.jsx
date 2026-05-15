import React, { useRef } from 'react';
import rilis1 from '../../assets/rilis1.png';
import rilis2 from '../../assets/rilis2.png';
import rilis3 from '../../assets/rilis3.png';
import rilis4 from '../../assets/rilis4.png';
import rilis5 from '../../assets/rilis5.png';

const NewReleases = ({ onMovieClick }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const movies = [
    { id: 1, image: rilis1, isTop10: true, isNewEpisode: false },
    { id: 2, image: rilis2, isTop10: false, isNewEpisode: true },
    { id: 3, image: rilis3, isTop10: true, isNewEpisode: false },
    { id: 4, image: rilis4, isTop10: false, isNewEpisode: false },
    { id: 5, image: rilis5, isTop10: false, isNewEpisode: false },
  ];

  return (
    <section className="px-4 mt-[-50px] md:mt-0 md:px-12 lg:px-24 py-8 mb-12">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
        Rilis Baru
      </h2>
      
      {/* Horizontal Scroll Container */}
      <div className="relative">
        <button 
          onClick={() => scroll('left')}
          className="absolute hidden md:block lg:left-[-25px] top-1/2 -translate-y-1/2 z-20 bg-[#2F3334] hover:bg-gray-700 text-[#FFFFFF] p-3 rounded-full shadow-xl transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-[34px] overflow-x-auto pb-4 scrollbar-hide scroll-smooth" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              onClick={() => onMovieClick && onMovieClick(movie)}
              className="relative flex-none w-[95px] md:w-[180px] lg:w-[234px] aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={movie.image} 
                alt={`New Release ${movie.id}`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Top 10 Badge */}
              {movie.isTop10 && (
                <div className="absolute top-0 right-[3px] md:right-3 bg-[#B71C1C] text-[#FFFFFF] text-[6.69px] md:text-[10px] lg:text-xs font-medium px-[2px] md:px-2 py-1 md:py-1.5 rounded-tr-[1.91px] rounded-bl-[1.91px] text-center leading-tight shadow-md">
                  Top<br />10
                </div>
              )}

              {/* Episode Baru Badge */}
              {movie.isNewEpisode && (
                <div className="absolute top-2 left-2 bg-[#0F1E93] text-white text-[4px] md:text-[10px] font-bold px-2.5 py-1 rounded-full">
                  Episode Baru
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute hidden md:block right-2 lg:right-[-4px] top-1/2 -translate-y-1/2 z-20 bg-[#2F3334] hover:bg-gray-700 text-[#FFFFFF] p-3 rounded-full shadow-xl transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default NewReleases;

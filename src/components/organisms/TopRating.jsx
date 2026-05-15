import React, { useRef } from 'react';
import rating1 from '../../assets/rating1.png';
import rating2 from '../../assets/rating2.png';
import rating3 from '../../assets/rating3.png';
import rating4 from '../../assets/rating4.png';
import rating5 from '../../assets/rilis3.png';

const TopRating = ({ onMovieClick }) => {
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
    { id: 1, image: rating1, isNewEpisode: true },
    { id: 2, image: rating2, isNewEpisode: false },
    { id: 3, image: rating3, isNewEpisode: false },
    { id: 4, image: rating4, isNewEpisode: false },
    { id: 5, image: rating5, isNewEpisode: false},
  ];

  return (
    <section className="px-4 mt-[-40px] md:px-12 lg:px-24 py-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
        Top Rating Film dan Series Hari ini
      </h2>
      
      {/* Horizontal Scroll Container */}
      <div className="relative">
        <button 
          onClick={() => scroll('left')}
          className="absolute hidden md:block left-2 lg:left-[-25px] top-1/2 -translate-y-1/2 z-20 bg-[#2F3334] hover:bg-gray-700 text-[#FFFFFF] p-3 rounded-full shadow-xl transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex gap-3 md:gap-[34px] overflow-x-auto pb-4 scrollbar-hide scroll-smooth" 
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
                alt={`Movie ${movie.id}`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
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

export default TopRating;

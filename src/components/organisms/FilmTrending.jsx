import React, { useRef } from 'react';
import trending1 from '../../assets/trending1.png';
import trending2 from '../../assets/trending2.png';
import trending3 from '../../assets/trending3.png';
import trending4 from '../../assets/trending4.png';
import trending5 from '../../assets/rilis1.png';

const FilmTrending = ({ onMovieClick }) => {
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
    { id: 1, image: trending1 },
    { id: 2, image: trending2 },
    { id: 3, image: trending3 },
    { id: 4, image: trending4 },
    { id: 5, image: trending5},
  ];

  return (
    <section className="px-4 mt-[-50px] md:mt-0 md:px-12 lg:px-24 py-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
        Film Trending
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
                alt={`Trending Movie ${movie.id}`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Top 10 Badge */}
              <div className="absolute top-0 right-[3px] md:right-3 bg-[#B71C1C] text-[#FFFFFF] text-[6.69px] md:text-[10px] lg:text-xs font-medium px-[2px] md:px-2 py-1 md:py-1.5 rounded-tr-[1.91px] rounded-bl-[1.91px] text-center leading-tight shadow-md">
                Top<br />10
              </div>
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

export default FilmTrending;

import React, { useRef } from 'react';
import starIcon from '../../assets/star.png';
import tonton1 from '../../assets/film2.png';
import tonton2 from '../../assets/tonton2.png';
import tonton3 from '../../assets/tonton3.png';
import tonton4 from '../../assets/tonton4.png';

const ContinueWatching = ({ onMovieClick }) => {
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
    { id: 1, title: "Don't Look Up", rating: "4.5/5", image: tonton1 },
    { id: 2, title: "The Batman", rating: "4.5/5", image: tonton2 },
    { id: 3, title: "Blue Lock", rating: "4.5/5", image: tonton3 },
    { id: 4, title: "A Man Called Otto", rating: "4.5/5", image: tonton4 },
  ];

  return (
    <section className="px-4 md:px-12 lg:px-24 py-8 md:py-12">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
        Melanjutkan Tonton Film
      </h2>
      
      {/* section mobile continue watching */}
      <div className="  block md:hidden flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            onClick={() => onMovieClick && onMovieClick(movie)}
            className="relative flex-none w-[309px] md:w-[320px] lg:w-[380px] aspect-[16/9] rounded-lg md:rounded-xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {/* Background Image */}
            <img 
              src={movie.image} 
              alt={movie.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Content (Title and Rating) */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 flex justify-between items-end">
              <h3 className="text-white font-medium text-sm md:text-lg">
                {movie.title}
              </h3>
              <div className="flex items-center gap-1.5">
                <img src={starIcon} alt="Rating" className="w-3 h-3 md:w-4 md:h-4 opacity-90" />
                <span className="text-gray-300 text-xs md:text-sm font-medium">
                  {movie.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* section destop continue watching */}
      <div className="hidden md:block relative">
        <button 
          onClick={() => scroll('left')}
          className="absolute  lg:left-[-25px] top-1/2 -translate-y-1/2 z-20 bg-[#2F3334] hover:bg-gray-700 text-[#FFFFFF] p-3 rounded-full shadow-xl transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              onClick={() => onMovieClick && onMovieClick(movie)}
              className="relative flex-none w-[309px] md:w-[309px] lg:w-[309px] aspect-[16/9] rounded-lg md:rounded-xl overflow-hidden group/item cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content (Title and Rating) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 flex justify-between items-end">
                <h3 className="text-white font-medium text-sm md:text-lg">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-1.5">
                  <img src={starIcon} alt="Rating" className="w-3 h-3 md:w-4 md:h-4 opacity-90" />
                  <span className="text-gray-300 text-xs md:text-sm font-medium">
                    {movie.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 lg:right-[-4px] top-1/2 -translate-y-1/2 z-20 bg-[#2F3334] hover:bg-gray-700 text-[#FFFFFF] p-3 rounded-full shadow-xl transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default ContinueWatching;

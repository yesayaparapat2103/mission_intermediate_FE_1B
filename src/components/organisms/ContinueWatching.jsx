import React, { useRef, useState } from 'react';
import starIcon from '../../assets/star.png';
import tonton1 from '../../assets/film2.png';
import tonton2 from '../../assets/tonton2.png';
import tonton3 from '../../assets/tonton3.png';
import tonton4 from '../../assets/tonton4.png';
import MovieCard from '../molecules/MovieCard';

const ContinueWatching = ({ movies, onAddToWatchlist, onMovieUpdate }) => {
  const scrollContainerRef = useRef(null);
  const [activeMovieId, setActiveMovieId] = useState(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };



  return (
    <section className="px-4 md:px-12 lg:px-24 py-8 md:py-12">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
        Melanjutkan Tonton Film
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute hidden lg:mt-[30px] md:block lg:left-[-25px] top-1/2 -translate-y-1/2 z-20 bg-[#2F3334] hover:bg-gray-700 text-[#FFFFFF] p-3 rounded-full shadow-xl transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto py-20 -my-20 pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddToWatchlist={onAddToWatchlist}
              isActive={activeMovieId === movie.id}
              onToggle={() => setActiveMovieId(activeMovieId === movie.id ? null : movie.id)}
              aspectRatio="aspect-[16/9]"
              widthClass="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[309px]"
              onMovieUpdate={onMovieUpdate}
            />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute hidden md:block right-2 lg:mt-[30px] lg:right-[-4px] top-1/2 -translate-y-1/2 z-20 bg-[#2F3334] hover:bg-gray-700 text-[#FFFFFF] p-3 rounded-full shadow-xl transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default ContinueWatching;

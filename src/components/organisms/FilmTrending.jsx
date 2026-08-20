import React, { useRef, useState } from 'react';
import MovieCard from '../molecules/MovieCard';

const FilmTrending = ({ movies, onAddToWatchlist, onMovieUpdate }) => {
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
    <section className="relative px-4 lg:top-[80px] md:mt-0 md:px-12 lg:px-24 py-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
        Film Trending
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute hidden md:block lg:mt-[30px] lg:left-[-25px] top-1/2 -translate-y-1/2 z-20 bg-[#2F3334] hover:bg-gray-700 text-[#FFFFFF] p-3 rounded-full shadow-xl transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-[34px] overflow-x-auto py-20 -my-20 pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddToWatchlist={onAddToWatchlist}
              isActive={activeMovieId === movie.id}
              onToggle={() => setActiveMovieId(activeMovieId === movie.id ? null : movie.id)}
              widthClass="w-[95px] sm:w-[140px] md:w-[180px] lg:w-[234px]"
              onMovieUpdate={onMovieUpdate}
            />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute hidden md:block lg:mt-[30px] right-2 lg:right-[-4px] top-1/2 -translate-y-1/2 z-20 bg-[#2F3334] hover:bg-gray-700 text-[#FFFFFF] p-3 rounded-full shadow-xl transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default FilmTrending;

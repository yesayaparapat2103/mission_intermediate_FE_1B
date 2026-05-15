import React, { useState } from 'react';
import Navbar from '../components/organisms/Navbar';
import Hero from '../components/organisms/Hero';
import ContinueWatching from '../components/organisms/ContinueWatching';
import TopRating from '../components/organisms/TopRating';
import FilmTrending from '../components/organisms/FilmTrending';
import NewReleases from '../components/organisms/NewReleases';
import Footer from '../components/organisms/Footer';
import MovieModal from '../components/organisms/MovieModal';

const HomePage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <div className="min-h-screen bg-[#181A1C] text-white flex flex-col relative">
      <Navbar />
      <Hero />
      <ContinueWatching onMovieClick={setSelectedMovie} />
      <TopRating onMovieClick={setSelectedMovie} />
      <FilmTrending onMovieClick={setSelectedMovie} />
      <div className="flex-1">
        <NewReleases onMovieClick={setSelectedMovie} />
      </div>
      <Footer />

      <MovieModal 
        isOpen={!!selectedMovie} 
        onClose={() => setSelectedMovie(null)} 
        movie={selectedMovie} 
      />
    </div>
  );
};

export default HomePage;

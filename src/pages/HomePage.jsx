import React, { useState, useEffect } from 'react';
import Navbar from '../components/organisms/Navbar';
import Hero from '../components/organisms/Hero';
import ContinueWatching from '../components/organisms/ContinueWatching';
import TopRating from '../components/organisms/TopRating';
import FilmTrending from '../components/organisms/FilmTrending';
import NewReleases from '../components/organisms/NewReleases';
import Footer from '../components/organisms/Footer';
import MovieCard from '../components/molecules/MovieCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ watchlist, addToWatchlist }) => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert("Akses ditolak! Silahkan login terlebih dahulu!");
      navigate("/login");
      return;
    }

    const fetchMovie = async () => {
      try {
        const params = {};
        if (searchQuery) params.search = searchQuery;
        if (selectedCategory) params.category = selectedCategory;
        if (selectedGenre) params.genre = selectedGenre;
        if (sortBy) {
          params.sort = sortBy;
          params.order = sortBy === "title" ? "asc" : "desc";
        }

        const response = await axios.get('http://localhost:5000/api/movies', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: params
        });

        if (response.status === 200) {
          setMovie(response.data);
          console.log("Daftar film berhasil dimuat:", response.data);
        }
      } catch (error) {
        console.error("Gagal mengambil data film:", error);

        if (error.response && error.response.status === 401) {
          alert("Sesi Anda berakhir! Silahkan login kembali!");
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          navigate("/login");
        }
      }
    }
    fetchMovie();
  }, [navigate, searchQuery, selectedCategory, selectedGenre, sortBy, refreshTrigger]);

  const formattedMovies = movie.map((m) => {
    const imageUrl = m.poster_url && m.poster_url.startsWith('/upload')
      ? `http://localhost:5000${m.poster_url}`
      : m.poster_url;

    return {
      id: m.id,
      title: m.title,
      image: imageUrl,
      rating: m.rating,
      episodes: m.episodes,
      isNewEpisode: m.is_new_episode === 1 || m.is_new_episode === true,
      isTop10: m.is_top_10 === 1 || m.is_top_10 === true,
      is_continue: m.is_continue === 1 || m.is_continue === true,
      is_trending: m.is_trending === 1 || m.is_trending === true,
      is_top_rating: m.is_top_rating === 1 || m.is_top_rating === true,
      is_new_release: m.is_new_release === 1 || m.is_new_release === true,
    };
  });

  const continueWatchingMovies = formattedMovies.filter((m) => m.is_continue);
  const topRatingMovies = formattedMovies.filter((m) => m.is_top_rating);
  const trendingMovies = formattedMovies.filter((m) => m.is_trending);
  const newReleasesMovies = formattedMovies.filter((m) => m.is_new_release);

  const isFilterActive = searchQuery || selectedCategory || selectedGenre || sortBy !== "id";

  return (
    <div className="min-h-screen bg-[#181A1C] text-white flex flex-col relative">
      <Navbar
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        activeCategory={selectedCategory}
      />

      {!isFilterActive && <Hero />}

      <div className={`${isFilterActive
          ? 'relative bg-[#22282A] border-b border-gray-800'
          : 'absolute top-[52px] md:top-[80px] left-0 right-0 z-20 bg-transparent border-b border-transparent'
        } flex flex-wrap items-center justify-between gap-4 px-4 md:px-6 lg:px-[80px] lg:mx-14 py-6 transition-all`}>
        <div className="flex items-center gap-4">
          <h2 className="text-lg md:text-xl font-bold">
            {isFilterActive ? "Hasil Pencarian & Filter" : ""}
          </h2>

          <div className="relative">
            <button
              onClick={() => setIsGenreOpen(!isGenreOpen)}
              className="flex items-center gap-6 bg-[#2C3033] text-white text-xs md:text-sm px-4 py-2 rounded-md border border-gray-700 hover:border-gray-500 transition duration-300 font-medium"
            >
              <span>{selectedGenre || "Genre"}</span>
              <svg className={`w-3 h-3 transition-transform duration-300 ${isGenreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isGenreOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsGenreOpen(false)}></div>

                <div className="absolute left-0 mt-2 w-[280px] sm:w-[320px] bg-[#22282A] border border-gray-800 rounded-lg shadow-2xl p-4 z-20 grid grid-cols-2 gap-x-6 gap-y-2">
                  <div className="flex flex-col gap-1">
                    {["Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan"].map((g) => (
                      <button
                        key={g}
                        onClick={() => { setSelectedGenre(g); setIsGenreOpen(false); }}
                        className={`text-left text-xs sm:text-sm px-2 py-1.5 rounded transition ${selectedGenre === g ? "text-[#09AA29] bg-[#2C3033] font-bold" : "text-gray-300 hover:text-white hover:bg-[#2C3033]"}`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1">
                    {["KDrama", "Komedi", "Petualangan", "Perang", "Romantis", "Sains & Alam", "Thriller"].map((g) => (
                      <button
                        key={g}
                        onClick={() => { setSelectedGenre(g); setIsGenreOpen(false); }}
                        className={`text-left text-xs sm:text-sm px-2 py-1.5 rounded transition ${selectedGenre === g ? "text-[#09AA29] bg-[#2C3033] font-bold" : "text-gray-300 hover:text-white hover:bg-[#2C3033]"}`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>

                  {selectedGenre && (
                    <div className="col-span-2 border-t border-gray-800 pt-2 mt-1">
                      <button
                        onClick={() => { setSelectedGenre(""); setIsGenreOpen(false); }}
                        className="w-full text-center text-xs text-red-500 hover:bg-[#2C3033] py-1.5 rounded transition"
                      >
                        Hapus Filter
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#2C3033] text-white text-xs md:text-sm rounded-lg px-3 py-1.5 outline-none cursor-pointer border border-gray-700 hover:border-gray-500"
          >
            <option value="id">Terbaru</option>
            <option value="rating">Rating Tertinggi</option>
            <option value="release_date">Tanggal Rilis</option>
            <option value="title">Abjad (A-Z)</option>
          </select>
        </div>
      </div>


      {isFilterActive ? (
        <div className="px-4 md:px-6 lg:px-[80px] lg:mx-14 py-8 flex-1">
          {formattedMovies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
              {formattedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onAddToWatchlist={addToWatchlist} widthClass="w-full" onMovieUpdate={() => setRefreshTrigger(prev => prev + 1)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              Tidak ada film yang cocok dengan pencarian atau filter Anda.
            </div>
          )}
        </div>
      ) : (
        <>
          <ContinueWatching movies={continueWatchingMovies} onAddToWatchlist={addToWatchlist} onMovieUpdate={() => setRefreshTrigger(prev => prev + 1)} />
          <TopRating movies={[...topRatingMovies].reverse()} onAddToWatchlist={addToWatchlist} onMovieUpdate={() => setRefreshTrigger(prev => prev + 1)} />
          <FilmTrending movies={[...trendingMovies].reverse()} onAddToWatchlist={addToWatchlist} onMovieUpdate={() => setRefreshTrigger(prev => prev + 1)} />
          <div className="flex-1">
            <NewReleases movies={[...newReleasesMovies].reverse()} onAddToWatchlist={addToWatchlist} onMovieUpdate={() => setRefreshTrigger(prev => prev + 1)} />
          </div>
        </>
      )}

      {watchlist.length > 0 && !isFilterActive && (
        <div className="py-8">
          <h2 className="text-white text-xl md:text-2xl font-bold px-4 md:px-6 lg:px-12 mb-4">
            Daftar Saya
          </h2>
          <div className="flex gap-4 overflow-x-auto px-4 md:px-6 lg:px-12 no-scrollbar">
            {watchlist.map((movie) => (
              <div key={movie.id} className="min-w-[150px] md:min-w-[200px]">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="rounded-lg hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;

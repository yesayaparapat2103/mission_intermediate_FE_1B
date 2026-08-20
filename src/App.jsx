import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    const isExist = watchlist.find((item) => item.id === movie.id);
    if (!isExist) {
      setWatchlist([...watchlist, movie]);
      alert("Berhasil ditambahkan ke watchlist");
    } else {
      alert("Film ini sudah ada di watchlist");
    }
  };

  const removeMovieFromWatchList = (movieId) => {
    setWatchlist(watchlist.filter((item) => item.id !== movieId));
    alert("Film berhasil dihapus dari daftar saya");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/" element={<HomePage watchlist={watchlist} addToWatchlist={addToWatchlist} />} /> */}
        <Route path="/home" element={<HomePage watchlist={watchlist} addToWatchlist={addToWatchlist} />} />
        <Route path="/watchlist" element={<WatchlistPage watchlist={watchlist} addToWatchlist={addToWatchlist} removeMovieFromWatchList={removeMovieFromWatchList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


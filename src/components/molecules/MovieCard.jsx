import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const MovieCard = ({ 
  movie, 
  onAddToWatchlist, 
  onRemoveFromWatchlist, 
  isWatchlistPage, 
  isActive, 
  onToggle,
  aspectRatio = "aspect-[2/3]",
  widthClass = "",
  onMovieUpdate
}) => {
  const [currentImage, setCurrentImage] = useState(movie.image);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setCurrentImage(movie.image);
  }, [movie.image]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setIsUploading(true);
    try {
      const uploadResponse = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (uploadResponse.status === 200) {
        const fileUrl = uploadResponse.data.fileUrl;
        const token = localStorage.getItem('token');

        const patchResponse = await axios.patch(
          `http://localhost:5000/api/movies/${movie.id}/poster`,
          { poster_url: fileUrl },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (patchResponse.status === 200) {
          const fullUrl = `http://localhost:5000${fileUrl}`;
          setCurrentImage(fullUrl);
          alert("Poster berhasil diperbarui!");
          if (onMovieUpdate) {
            onMovieUpdate();
          }
        }
      }
    } catch (error) {
      console.error("Gagal memperbarui poster:", error);
      alert(error.response?.data?.message || "Gagal mengunggah gambar!");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div
      className={`relative flex-none transition-all duration-300 ease-in-out cursor-pointer ${widthClass}`}
      onClick={onToggle}
      style={{
        zIndex: isActive ? 100 : 1,
        transform: isActive ? 'scale(1.1)' : 'scale(1)',
        width: isActive
          ? (aspectRatio === "aspect-[16/9]" ? '400px' : '320px')
          : (widthClass ? undefined : (aspectRatio === "aspect-[16/9]" ? '309px' : '234px')),
      }}
    >
      <div className={`relative ${aspectRatio} w-full overflow-hidden rounded-lg shadow-lg transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handleFileChange} 
          onClick={(e) => e.stopPropagation()}
        />
        <img 
          src={currentImage} 
          alt={movie.title}
          className="w-full h-full object-cover" 
        />
        {movie.isNewEpisode && (
          <div className="absolute top-2 left-2 bg-[#0F1E93] text-white text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-full">
            Episode Baru
          </div>
        )}
        {movie.isTop10 && (
          <div className="absolute top-0 right-2 bg-[#B71C1C] text-white text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-b-sm text-center leading-tight">
            Top<br />10
          </div>
        )}
      </div>

      {isActive && (
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 bg-[#181A1C] rounded-lg shadow-2xl flex flex-col p-0 z-50 border border-gray-800 translate-y-[-10%] h-[420px] ${aspectRatio === "aspect-[16/9]" ? 'w-[450px]' : 'w-[320px]'}`}
        >
          <div className="relative group/poster w-full h-44">
            <img src={currentImage} className="w-full h-44 object-cover rounded-t-lg" />
            <button 
              onClick={(e) => { e.stopPropagation(); fileInputRef.current.click(); }}
              disabled={isUploading}
              className="absolute inset-0 bg-black/60 opacity-0 group-hover/poster:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white text-xs font-semibold rounded-t-lg"
            >
              {isUploading ? (
                <span className="animate-pulse">Mengunggah...</span>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                  <span>Ubah Gambar</span>
                </>
              )}
            </button>
          </div>

          <div className="p-3 bg-[#181A1C] rounded-b-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex gap-2">
                <button onClick={(e) => e.stopPropagation()} className="bg-white rounded-full p-1.5 text-black hover:bg-gray-200 transition">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M8 5v14l11-7z" /></svg>
                </button>

                {isWatchlistPage ? (
                  <button
                    onClick={(e) => { e.stopPropagation(); onRemoveFromWatchlist(movie.id); onToggle(); }}
                    className="border border-red-500 rounded-full p-1.5 text-red-500 hover:bg-red-500 hover:text-white transition"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                ) : (
                  <button
                    onClick={(e) => { e.stopPropagation(); onAddToWatchlist(movie); }}
                    className="border border-gray-500 rounded-full p-1.5 text-white hover:border-white transition"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gray-700 text-[10px] px-1.5 py-0.5 rounded font-bold">13+</span>
              <span className="text-white text-[10px] font-medium">{movie.episodes || "16 Episode"}</span>
              {movie.rating && <span className="text-yellow-500 text-[10px] font-bold">★ {movie.rating}</span>}
            </div>

            <div className="flex items-center gap-1 text-[9px] text-gray-400">
              <span>{movie.title || "Film Populer"}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;

import React from 'react';

const MovieModal = ({ isOpen, onClose, movie }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-[#181A1C] rounded-xl overflow-hidden shadow-2xl w-full max-w-[340px] md:max-w-[400px] transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Section */}
        <div className="relative aspect-video w-full">
          <img 
            src={movie.image} 
            alt={movie.title || "Movie Detail"} 
            className="w-full h-full object-cover"
          />
          {/* Close button inside image */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/90 text-white rounded-full p-1.5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Bottom Info Section */}
        <div className="p-5 md:p-6">
          {/* Buttons */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <button className="bg-white hover:bg-gray-200 text-black rounded-full transition flex items-center justify-center w-10 h-10 md:w-12 md:h-12 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 ml-1">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="border-2 border-gray-400 hover:border-white text-white rounded-full transition flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </button>
            </div>
            <button className="border-2 border-gray-400 hover:border-white text-white rounded-full transition flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

          {/* Details (Age, Duration) */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gray-600/70 text-gray-200 text-sm font-semibold px-2 py-0.5 rounded-md">
              13+
            </span>
            <span className="text-white font-medium text-sm md:text-base">
              16 Episode
            </span>
          </div>

          {/* Genres */}
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium">
            <span>Misteri</span>
            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mx-1"></span>
            <span>Kriminal</span>
            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mx-1"></span>
            <span>Fantasi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;

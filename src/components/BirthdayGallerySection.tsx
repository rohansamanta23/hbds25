
import React from "react";

const PHOTOS = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
];

const message = `Another year, another incredible journey ahead! 
We're so lucky to have you in our lives.
Hope all your dreams come true – you deserve every bit of happiness! 🎂🎉`;

const BirthdayGallerySection: React.FC = () => {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center justify-center animate-fade-in">
      <div className="w-full flex flex-col sm:flex-row gap-6 items-center justify-center">
        {PHOTOS.map((url, idx) => (
          <div key={idx} className="w-full sm:w-1/3 flex-shrink-0 flex-grow-0">
            <img
              src={url}
              alt={`Soumili moment ${idx + 1}`}
              className="rounded-xl shadow-lg object-cover w-full h-44 sm:h-56 md:h-64 bg-white/80 hover-scale"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <p className="mt-9 text-lg sm:text-xl font-medium text-fuchsia-800 bg-white/70 rounded-lg px-6 py-5 shadow-md text-center leading-relaxed backdrop-blur-md w-full max-w-xl">
        {message}
      </p>
    </div>
  );
};

export default BirthdayGallerySection;

import React from "react";

const PHOTOS = [
  "https://res.cloudinary.com/projectbackendrohan/image/upload/v1750001306/ChatGPT_Image_Jun_15_2025_04_30_06_PM_r6ud2t.png",
  "https://res.cloudinary.com/projectbackendrohan/image/upload/v1750001306/ChatGPT_Image_Jun_15_2025_04_32_27_PM_rdlvyg.png",
  "https://res.cloudinary.com/projectbackendrohan/image/upload/v1750001306/ChatGPT_Image_Jun_15_2025_04_32_32_PM_pzs3wt.png",
];

const message = `You’re the only person I know who could mess up using a laptop, burn water(rip soyabean), and still act like the main character. Honestly, it’s impressive how you manage to survive despite having the decision-making skills of a broken system.
And still, you wanted to travel solo.`;

const BirthdayGallerySection: React.FC = () => {
  return (
    <div className="w-full max-w-3xl flex flex-col  items-center justify-center animate-fade-in">
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

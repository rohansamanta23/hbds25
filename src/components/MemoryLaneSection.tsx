
import React from "react";
import { GalleryHorizontal } from "lucide-react";

const MEMORIES = [
  {
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    label: "Late night study sessions – laughter & coffee included!",
  },
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    label: "Planning getaways that didn't go to plan (but were the best ever).",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    label: "Photo walks – capturing quirky moments and each other.",
  },
  {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    label: "Movie nights – popcorn, bad jokes, and hugs.",
  },
  {
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80",
    label: "Stargazing till dawn (or until someone fell asleep).",
  },
  {
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    label: "Cozy winter evenings wrapped in blankets, telling stories.",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    label: "Spontaneous adventures – always finding a way to have fun!",
  },
];

const MemoryLaneSection: React.FC = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[120vh] w-full py-20 px-2 z-10 animate-fade-in">
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4">
        <GalleryHorizontal className="text-fuchsia-700" size={32} />
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-fuchsia-800 drop-shadow text-center">
          Memory Lane
        </h2>
      </div>
      <p className="text-lg md:text-xl text-fuchsia-900 bg-white/70 rounded-lg px-5 py-2 max-w-2xl mb-12 shadow backdrop-blur-sm text-center">
        A walk down memory lane – just a few of the moments we've shared and will cherish forever!
      </p>
    </div>

    <div className="relative w-full max-w-5xl flex flex-col md:flex-row flex-wrap gap-8 md:gap-6 items-center justify-center">
      {MEMORIES.map((m, idx) => (
        <div
          key={idx}
          className="group flex flex-col items-center w-full md:w-[29%] bg-white/90 rounded-xl shadow-lg p-4 hover-scale transition
                     border border-fuchsia-100 md:min-h-[340px] md:max-w-xs"
          style={{
            animation: `fade-in 0.5s ${0.10 * idx + 0.2}s both`
          }}
        >
          <img
            src={m.image}
            alt={`Memory ${idx + 1}`}
            className="rounded-lg object-cover w-full h-44 md:h-40 mb-4 bg-gray-50 shadow group-hover:scale-105 transition-transform"
            loading="lazy"
            draggable={false}
          />
          <span className="text-md md:text-lg text-fuchsia-900 font-medium text-center">{m.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default MemoryLaneSection;


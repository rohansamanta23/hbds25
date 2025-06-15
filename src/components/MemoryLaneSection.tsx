
import React from "react";
import { GalleryHorizontal, Sparkle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const MEMORIES = [
  {
    date: "Apr 2023",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    comment: "Late night study sessions – laughter & coffee included!"
  },
  {
    date: "May 2023",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    comment: "Planning getaways that didn't go to plan (but were the best ever)."
  },
  {
    date: "Jul 2023",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    comment: "Photo walks – capturing quirky moments and each other."
  },
  {
    date: "Sep 2023",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    comment: "Movie nights – popcorn, bad jokes, and hugs."
  },
  {
    date: "Nov 2023",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80",
    comment: "Stargazing till dawn (or until someone fell asleep)."
  },
  {
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    comment: "Cozy winter evenings wrapped in blankets, telling stories."
  },
  {
    date: "Mar 2024",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    comment: "Spontaneous adventures – always finding a way to have fun!"
  }
];

function MemoryCard({
  date,
  image,
  comment
}: {
  date: string;
  image: string;
  comment: string;
}) {
  return (
    <div
      className="
        relative flex flex-col md:flex-row items-center justify-center
        min-h-[72vh] md:min-h-[76vh] max-h-[84vh]
        w-full max-w-3xl md:max-w-4xl mx-auto
        overflow-hidden
        border-[2.5px] border-fuchsia-200 shadow-2xl rounded-3xl
        animate-fade-in
        p-0
        group
      "
      style={{
        background:
          "linear-gradient(120deg, #fdf6fa 0%, #ebd8f1 60%, #fde6f5 100%)"
      }}
    >
      {/* Decorative colorful overlays for professional touch */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-0 top-0 w-[54%] h-[54%] bg-gradient-to-br from-pink-300/50 via-fuchsia-200/40 to-fuchsia-100/0 rounded-bl-3xl blur-[64px]"></div>
        <div className="absolute right-0 bottom-0 w-[68%] h-[54%] bg-gradient-to-tr from-indigo-200/30 via-purple-100/40 to-pink-100/0 rounded-tr-[3.5rem] blur-[60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-fuchsia-100/5 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 rounded-3xl border border-fuchsia-300/30"></div>
        <div className="absolute -inset-1 rounded-[2.2rem] border-[3px] border-fuchsia-100/45"></div>
      </div>
      {/* CARD MAIN */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
        <div className="w-full md:w-2/5 flex justify-center items-center mb-7 md:mb-0">
          <div className="relative group">
            <span className="absolute -top-3 -left-3 z-10 animate-pulse">
              <Sparkle className="text-fuchsia-400 drop-shadow" size={38} />
            </span>
            <img
              src={image}
              alt={date}
              className="
                w-64 h-64 md:w-72 md:h-72 rounded-3xl object-cover shadow-2xl border-4 border-white/90
                hover:scale-105 group-hover:scale-105 transition-transform duration-300 
                ring-2 ring-fuchsia-200
                bg-[#f8e5fb]
              "
              draggable={false}
              loading="lazy"
            />
            <span className="absolute -bottom-3 -right-3 z-10 animate-pulse">
              <Sparkle className="text-fuchsia-400 drop-shadow" size={28} />
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 md:px-4 lg:px-8">
          <span className="mb-3 inline-flex items-center gap-2 px-5 py-2 rounded-full text-base font-semibold bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-200 shadow">
            {date}
          </span>
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-fuchsia-900 drop-shadow mb-3 animate-fade-in">
            Memory
            <span className="mx-2 text-transparent bg-gradient-to-br from-fuchsia-400 via-pink-500 to-indigo-400 bg-clip-text">#{date}</span>
          </h3>
          <div className="bg-white/90 ring-1 ring-fuchsia-100 rounded-xl px-6 py-5 shadow-lg backdrop-blur-sm max-w-lg animate-fade-in">
            <p className="text-lg md:text-2xl font-medium text-fuchsia-950 leading-relaxed italic">
              {comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const MemoryLaneSection: React.FC = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[92vh] w-full py-20 md:py-24 px-2 z-10">
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center gap-2 mb-4">
        <GalleryHorizontal className="text-fuchsia-700" size={36} />
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-fuchsia-800 drop-shadow text-center">
          Memory Lane
        </h2>
      </div>
    </div>
    {/* Carousel - vertical orientation, swipe or scroll to move memories */}
    <Carousel
      opts={{
        loop: true,
        align: "center",
        dragFree: false
      }}
      orientation="vertical"
      className="w-full max-w-4xl relative animate-fade-in"
      style={{
        height: "80vh"
      }}
    >
      <CarouselContent>
        {MEMORIES.map((m, idx) => (
          <CarouselItem key={m.date + idx}>
            <MemoryCard {...m} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Move buttons for vertical orientation (arrows up/down) */}
      <CarouselPrevious className="top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-fuchsia-100/90 border-fuchsia-200 shadow-md focus:ring-fuchsia-300 hover:bg-fuchsia-200/80" />
      <CarouselNext className="bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 bg-fuchsia-100/90 border-fuchsia-200 shadow-md focus:ring-fuchsia-300 hover:bg-fuchsia-200/80" />
    </Carousel>
    <div className="mt-8 text-fuchsia-700 text-base font-medium">
      <span className="bg-fuchsia-50 px-4 py-1 rounded-full shadow">Scroll up/down or swipe to explore!</span>
    </div>
  </section>
);

export default MemoryLaneSection;

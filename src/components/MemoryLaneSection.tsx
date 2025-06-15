
import React, { useEffect, useRef, useState } from "react";
import { GalleryHorizontal, Sparkle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, /* CarouselPrevious, CarouselNext, */ type CarouselApi } from "@/components/ui/carousel";
const MEMORIES = [{
  date: "Apr 2023",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
  comment: "Late night study sessions – laughter & coffee included!"
}, {
  date: "May 2023",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
  comment: "Planning getaways that didn't go to plan (but were the best ever)."
}, {
  date: "Jul 2023",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  comment: "Photo walks – capturing quirky moments and each other."
}, {
  date: "Sep 2023",
  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
  comment: "Movie nights – popcorn, bad jokes, and hugs."
}, {
  date: "Nov 2023",
  image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80",
  comment: "Stargazing till dawn (or until someone fell asleep)."
}, {
  date: "Jan 2024",
  image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
  comment: "Cozy winter evenings wrapped in blankets, telling stories."
}, {
  date: "Mar 2024",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  comment: "Spontaneous adventures – always finding a way to have fun!"
}];
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
      className={`
        relative flex flex-col md:flex-row items-center justify-center
        min-h-[76vh] md:min-h-[85vh] max-h-[94vh]
        w-full max-w-5xl md:max-w-7xl mx-auto
        overflow-hidden
        border-[2.5px] border-fuchsia-200 shadow-2xl rounded-3xl
        animate-fade-in
        p-0
        group
      `}
      style={{
        background: "linear-gradient(120deg, #fdf6faB0 0%, #ebd8f1A0 60%, #fde6f580 100%)"
      }}
    >
      {/* Decorative colorful overlays for professional touch */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-0 top-0 w-[54%] h-[54%] bg-gradient-to-br from-pink-300/30 via-fuchsia-200/20 to-fuchsia-100/0 rounded-bl-3xl blur-[64px]"></div>
        <div className="absolute right-0 bottom-0 w-[68%] h-[54%] bg-gradient-to-tr from-indigo-200/15 via-purple-100/20 to-pink-100/0 rounded-tr-[3.5rem] blur-[60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-fuchsia-100/5 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 rounded-3xl border border-fuchsia-300/15"></div>
        <div className="absolute -inset-1 rounded-[2.2rem] border-[3px] border-fuchsia-100/15"></div>
      </div>
      {/* CARD MAIN */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-16">
        <div className="w-full md:w-2/4 flex justify-center items-center mb-7 md:mb-0">
          <div className="relative group">
            <span className="absolute -top-3 -left-3 z-10 animate-pulse">
              <Sparkle className="text-fuchsia-400 drop-shadow" size={44} />
            </span>
            <img
              src={image}
              alt={date}
              className="
                w-80 h-80 md:w-[25rem] md:h-[25rem] rounded-3xl object-cover shadow-2xl border-4 border-white/80
                hover:scale-105 group-hover:scale-105 transition-transform duration-300 
                ring-2 ring-fuchsia-200
                bg-[#f8e5fb]
              "
              draggable={false}
              loading="lazy"
            />
            <span className="absolute -bottom-3 -right-3 z-10 animate-pulse">
              <Sparkle className="text-fuchsia-400 drop-shadow" size={34} />
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 md:px-6 lg:px-12">
          <span className="mb-3 inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-semibold bg-fuchsia-50/80 text-fuchsia-600 border border-fuchsia-200 shadow">
            {date}
          </span>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-fuchsia-900 drop-shadow mb-3 animate-fade-in">
            Memory
            <span className="mx-2 text-transparent bg-gradient-to-br from-fuchsia-400 via-pink-500 to-indigo-400 bg-clip-text">#{date}</span>
          </h3>
          <div className="bg-white/60 ring-1 ring-fuchsia-100/70 rounded-xl px-10 py-7 shadow-lg backdrop-blur-md max-w-2xl animate-fade-in">
            <p className="text-2xl md:text-[2rem] font-medium text-fuchsia-950 leading-relaxed italic">
              {comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main section, full viewport
const MemoryLaneSection: React.FC = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance memory unless hovered
  useEffect(() => {
    // Don't create interval if hovered or api not ready
    if (!carouselApi || isHovered) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    intervalRef.current = setInterval(() => {
      // Next, but loop around if at end
      if (carouselApi) {
        if (carouselApi.selectedScrollSnap() === MEMORIES.length - 1) {
          carouselApi.scrollTo(0);
        } else {
          carouselApi.scrollNext();
        }
      }
    }, 3500); // 3.5s per slide
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [carouselApi, isHovered]);
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[100vh] h-[100vh] w-full py-0 px-1 md:px-2 z-10"
      style={{
        height: "100vh",
        minHeight: "100vh",
        background: "linear-gradient(120deg, #a18cd1e6 0%, #fbc2eb99 60%, #fad0c4aa 100%)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-4">
          <GalleryHorizontal className="text-fuchsia-700" size={42} />
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-fuchsia-800 drop-shadow text-center">
            Memory Lane
          </h2>
        </div>
      </div>
      {/* Enlarged Horizontal Carousel - responsive scroll/swipe */}
      <Carousel
        opts={{
          loop: true,
          align: "center",
          dragFree: false
        }}
        orientation="horizontal"
        className="w-full max-w-6xl md:max-w-7xl 2xl:max-w-[1200px] relative animate-fade-in"
        style={{
          minHeight: "85vh"
        }}
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {MEMORIES.map((m, idx) => (
            <CarouselItem key={m.date + idx}>
              <MemoryCard {...m} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
      <div className="mt-8 text-fuchsia-700 text-base font-medium"></div>
    </section>
  );
};
export default MemoryLaneSection;

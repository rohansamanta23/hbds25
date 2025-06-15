import React, { useEffect, useRef, useState } from "react";
import { GalleryHorizontal, Sparkle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";

const MEMORIES = [
  {
    date: "Sep 2019",
    image: "/assets/sep19.JPG",
    comment: "trip to the mountains - it was fun."
  },
  {
    date: "jan 2020",
    image: "/assets/jan20.jpg",
    comment: "birthday treat party"
  },
  {
    date: "Jan 2020",
    image: "/assets/jan20.2.jpg",
    comment: "Your first school bunk."
  },
  {
    date: "Mar 2024",
    image: "/assets/mar24.jpg",
    comment: "Twining!"
  },
  {
    date: "Apr 2024",
    image: "/assets/apr24.jpg",
    comment: "Trying to be drunk, but failing miserably."
  },
  {
    date: "May 2024",
    image: "/assets/may24.jpeg",
    comment: "Why am I here again? I forgot."
  },
  {
    date: "Aug 2024",
    image: "/assets/aug24.jpg",
    comment: "It was a great day to be honest. But, it was too nerdy."
  },
  {
    date: "Mar 2025",
    image: "/assets/mar25.jpg",
    comment: "I always loved this place. It is so peaceful and quiet. and the launch drive was amazing."
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
        min-h-[62vh] md:min-h-[72vh] max-h-[84vh]
        w-full max-w-3xl md:max-w-4xl mx-auto
        overflow-hidden
        border-[2.5px] border-fuchsia-200 shadow-2xl rounded-3xl
        animate-fade-in
        p-0
        group
      "
      style={{
        background: "linear-gradient(120deg, #fdf6fa 0%, #ebd8f1 60%, #fde6f5 100%)"
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

// Main horizontal, scroll-responsive carousel:
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
      className="relative flex flex-col items-center justify-center min-h-[92vh] w-full py-20 md:py-24 px-2 z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-4">
          <GalleryHorizontal className="text-fuchsia-700" size={36} />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-fuchsia-800 drop-shadow text-center">
            Memory Lane
          </h2>
        </div>
      </div>
      {/* Horizontal Carousel - responsive scroll/swipe */}
      <Carousel
        opts={{
          loop: true,
          align: "center",
          dragFree: false
        }}
        orientation="horizontal"
        className="w-full max-w-4xl relative animate-fade-in"
        style={{
          minHeight: "72vh"
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
        {/* Show arrow navigation buttons for carousel */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-8 text-fuchsia-700 text-base font-medium">
        <span className="bg-fuchsia-50 px-4 py-1 rounded-full shadow">
          Scroll left/right to explore!
        </span>
      </div>
    </section>
  );
};

export default MemoryLaneSection;


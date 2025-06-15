import React from "react";
import { GalleryHorizontal, Sparkle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
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

// For scroll-fade animation on carousel change
function MemoryCard({
  date,
  image,
  comment
}: {
  date: string;
  image: string;
  comment: string;
}) {
  return <div className="
        flex flex-col md:flex-row items-center justify-center
        min-h-[50vh] max-w-3xl mx-auto
        w-full bg-gradient-to-br from-pink-100 via-fuchsia-50 to-indigo-100 
        rounded-3xl shadow-2xl p-6 md:p-9
        relative border border-fuchsia-200
        animate-fade-in
        overflow-hidden
      ">
      <div className="w-full md:w-2/5 flex justify-center items-center mb-5 md:mb-0">
        <div className="relative group">
          <span className="absolute -top-2 -left-2 z-10 animate-pulse">
            <Sparkle className="text-fuchsia-400 drop-shadow" size={32} />
          </span>
          <img src={image} alt={date} className="w-52 h-52 rounded-2xl object-cover shadow-lg border-4 border-white/80 group-hover:scale-105 transition-transform duration-300" style={{
          background: "#f1d7fc"
        }} draggable={false} loading="lazy" />
          <span className="absolute -bottom-2 -right-2 z-10 animate-pulse">
            <Sparkle className="text-fuchsia-400 drop-shadow" size={24} />
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[1.12rem] bg-fuchsia-100 text-fuchsia-700 font-bold px-4 py-1 rounded-full drop-shadow border border-fuchsia-200 shadow">
            {date}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-playfair text-fuchsia-800 font-bold mb-2 animate-fade-in">
          Memory #{date}
        </h3>
        <p className="text-lg md:text-xl font-medium text-fuchsia-900/85 bg-white/80 rounded-xl px-5 py-3 shadow backdrop-blur-sm max-w-md animate-fade-in">
          <span className="italic">{comment}</span>
        </p>
      </div>
    </div>;
}
const MemoryLaneSection: React.FC = () => <section className="relative flex flex-col items-center justify-center min-h-[100vh] w-full py-20 px-2 z-10">
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center gap-2 mb-4">
        <GalleryHorizontal className="text-fuchsia-700" size={32} />
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-fuchsia-800 drop-shadow text-center">
          Memory Lane
        </h2>
      </div>
      
    </div>
    <Carousel opts={{
    loop: true,
    align: "center",
    dragFree: false
  }} className="w-full max-w-3xl relative animate-fade-in">
      <CarouselContent>
        {MEMORIES.map((m, idx) => <CarouselItem key={m.date + idx}>
            <MemoryCard {...m} />
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious className="left-2 md:left-[-56px] bg-fuchsia-100/80 border-fuchsia-200 shadow focus:ring-fuchsia-400 hover:bg-fuchsia-200/80" />
      <CarouselNext className="right-2 md:right-[-56px] bg-fuchsia-100/80 border-fuchsia-200 shadow focus:ring-fuchsia-400 hover:bg-fuchsia-200/80" />
    </Carousel>
  </section>;
export default MemoryLaneSection;
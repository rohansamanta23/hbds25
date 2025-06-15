
// Modern "Happy Birthday Soumili" page

import ConfettiBackground from "@/components/ConfettiBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20"
      style={{
        background:
          "linear-gradient(120deg, #a18cd1 0%, #fbc2eb 50%, #fad0c4 100%)",
      }}>
      <ConfettiBackground />
      <div className="relative z-10 flex flex-col items-center">
        <h1
          className="font-playfair text-[clamp(2.5rem,7vw,5rem)] font-bold text-white drop-shadow-2xl text-center animate-fade-in"
          style={{
            lineHeight: "1.05",
            letterSpacing: "-0.02em",
            textShadow: "0 8px 32px #fa709aa0",
          }}
        >
          Happy birthday <span className="block text-[clamp(2.5rem,8vw,6rem)] bg-gradient-to-br from-pink-400 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent animate-fade-in">Soumili</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-medium text-fuchsia-800 bg-white/80 rounded-lg px-5 py-2 shadow-md animate-fade-in backdrop-blur-sm">
          Wishing you a day filled with love, laughter and happiness!
        </p>
      </div>
      <footer className="relative z-10 w-full flex justify-center items-center mt-24 pb-4">
        <span className="text-base md:text-lg text-fuchsia-900/80 bg-white/60 rounded-md px-4 py-1 shadow animate-fade-in font-semibold">
          — from your friends 🎈
        </span>
      </footer>
    </div>
  );
};

export default Index;

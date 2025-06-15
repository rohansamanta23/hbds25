
import React, { useEffect, useState } from "react";

const CONFETTI_COLORS = [
  "#fa709a", "#a18cd1", "#fbc2eb", "#fdcbf1", "#b2fefa", "#c2ffd8",
  "#fee140", "#fad0c4", "#84fab0", "#8fd3f4"
];

interface ConfettiPiece {
  id: number;
  left: number;
  size: number;
  color: string;
  delay: number;
}

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const ConfettiBackground: React.FC = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    // Produce 32 confetti pieces per render
    const newPieces = Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      left: getRandom(2, 97),
      size: getRandom(8, 20),
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      delay: getRandom(0, 2.5),
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {pieces.map(piece => (
        <div
          key={piece.id}
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.size * 2.3,
            background: piece.color,
            opacity: 0.8,
            filter: "blur(0.5px)",
            borderRadius: "42% 58% 62% 38%/46% 39% 61% 54%",
            animation: `confetti 3.9s linear ${piece.delay}s forwards`,
            position: "absolute",
            top: "-40px",
            transform: `rotate(${getRandom(-15,50)}deg)`,
          }}
          className="shadow-lg"
        />
      ))}
    </div>
  );
};

export default ConfettiBackground;

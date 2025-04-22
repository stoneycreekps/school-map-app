import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hotspots = [
  {
    id: "library",
    name: "Library",
    x: 30,
    y: 40,
    description: "Quiet area with books and computers.",
    icon: `${process.env.PUBLIC_URL}/icons/library.png`
  },
  {
    id: "cafeteria",
    name: "Cafeteria",
    x: 60,
    y: 70,
    description: "Food and drink available here.",
    icon: `${process.env.PUBLIC_URL}/icons/cafeteria.png`
  }
];

export default function InteractiveMap() {
  const [selected, setSelected] = useState(null);

  const handleTap = (id) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative w-full max-w-screen-sm mx-auto">
      <img
        src={`${process.env.PUBLIC_URL}/school-map.png`}
        alt="School Map"
        className="w-full h-auto"
      />

      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className="absolute"
          style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <button onClick={() => handleTap(spot.id)} className="focus:outline-none">
            <img
              src={spot.icon}
              alt={spot.name}
              className="w-8 h-8 object-contain rounded-full shadow-md border-2 border-white"
            />
          </button>

          <AnimatePresence>
            {selected === spot.id && (
              <motion.div
                className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg w-44 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <h4 className="font-semibold mb-1">{spot.name}</h4>
                <p className="text-sm text-gray-700">{spot.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

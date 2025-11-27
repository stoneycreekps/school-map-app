import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveMap() {
  const [hotspots, setHotspots] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/hotspots.json`)
      .then((res) => res.json())
      .then(setHotspots)
      .catch((err) => console.error("Failed to load hotspots:", err));
  }, []);

  const handleTap = (id) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  const selectedSpot = hotspots.find((spot) => spot.id === selected);

  return (
    <div className="relative w-full max-w-screen-sm mx-auto">
      {/* Map background */}
      <img
        src={`${process.env.PUBLIC_URL}/school-map.png`}
        alt="School Map"
        className="w-full h-auto"
      />

      {/* Hotspot icons */}
      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className="absolute z-10"
          style={{
            left: `${spot.x}%`,
            top: `${spot.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <button onClick={() => handleTap(spot.id)} className="relative z-10">
            <img
              src={`${process.env.PUBLIC_URL}/icons/${spot.icon}`}
              alt={spot.name}
              className="w-12 h-12 object-contain"
            />
          </button>
        </div>
      ))}

      {/* Floating popup layer */}
      <AnimatePresence>
        {selectedSpot && (
          <motion.div
            className="absolute z-50 bg-white p-2 rounded-lg shadow-lg w-44"
            style={{
              left: `${selectedSpot.x}%`,
              top: `calc(${selectedSpot.y}% + 15px)`,
              transform: "translateX(-50%)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <h4 className="font-semibold mb-1">{selectedSpot.name}</h4>
            <p className="text-sm text-gray-700 whitespace-pre-line">{selectedSpot.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

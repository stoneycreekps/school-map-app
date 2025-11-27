import React from "react";
import InteractiveMap from "./InteractiveMap";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header with left logo and centered title */}
      <header className="bg-[#84000a] text-white py-3 shadow-md relative">
        <div className="max-w-screen-sm mx-auto flex items-center px-4 relative h-12">
          {/* Left-aligned logo */}
          <img
            src={`${process.env.PUBLIC_URL}/stoney_creek_logo_white.png`}
            alt="Stoney Creek Stallions"
            className="h-10 w-auto z-10"
          />

          {/* Absolutely centered title */}
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold tracking-wide">
            Winter Wonderland
          </h1>
        </div>
      </header>

      {/* Map Section */}
      <section className="p-4">
        <InteractiveMap />
      </section>
    </main>
  );
}

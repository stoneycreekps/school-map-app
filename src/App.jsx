import React from "react";
import InteractiveMap from "./InteractiveMap";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">School Map</h1>
      <InteractiveMap />
    </main>
  );
}
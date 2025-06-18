// src/components/Hero.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Hi, I'm Ephrem Deneke</h2>
      <p className="text-lg mb-6">A passionate Web Developer</p>
      <div className="flex justify-center gap-4">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
          <FaGithub /> GitHub
        </button>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
          <FaLinkedin /> LinkedIn
        </button>
      </div>
    </section>
  );
}
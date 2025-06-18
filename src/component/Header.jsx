import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ephrem.</h1>
        <nav className="space-x-4">
          <a href="#project" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
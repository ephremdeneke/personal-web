import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Header />
      <Hero />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
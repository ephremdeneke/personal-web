import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 container mx-auto px-4">
      <h3 className="text-3xl font-semibold mb-6 text-center">Contact</h3>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-lg"
        ></textarea>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

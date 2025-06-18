// src/component/Project.jsx
import React from "react";

export default function Project() {
  return (
    <section id="project" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-6 text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold mb-2">Project {i}</h4>
              <p className="text-gray-700">Short description of the project.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

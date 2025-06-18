import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-center py-6 mt-10 border-t">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}

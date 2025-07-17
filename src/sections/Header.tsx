"use client";
import React, { useState, useEffect } from "react";

export const Header = () => {
  // Custom scroll function with offset control
  const scrollTo = (sectionId: string, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const [activeSection, setActiveSection] = useState("home");

  // Add this effect to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/5 backdrop-blur-sm">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="nav-item px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => scrollTo("projects", 80)}
          className="nav-item px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
        >
          Projects
        </button>
        <button
          onClick={() => scrollTo("about", 10)}
          className="nav-item px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
        >
          About
        </button>
        <button
          onClick={() => scrollTo("contact", 40)}
          className="nav-item px-4 py-2 rounded-full bg-white text-gray-900 hover:bg-white/80 transition-colors"
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

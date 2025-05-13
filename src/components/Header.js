import React from "react";
import HeroTop from "./HeroTop";
import kidsPlay from "../assets/img/kidsPlay.webp";

export default function Header() {
  return (
    <div className="relative min-h-[60vh] sm:min-h-[80vh] md:min-h-[100vh]">
      {/* Image ou background vidéo via CSS */}
      <div
        style={{ backgroundImage: `url(${kidsPlay})` }}
        className="absolute inset-0 -z-10  bg-cover bg-center md:bg-bottom bg-no-repeat"></div>

      {/* Contenu centré */}
      <div className="relative flex items-center justify-center h-full px-4">
        <HeroTop />
      </div>
    </div>
  );
  {
    /* 
      <Container className="mt-10">
        <div className="navBarTop text-xl sm:text-2xl rotate">
          <span>Qui nous sommes ?</span>
        </div>
      </Container> 
      */
  }
}

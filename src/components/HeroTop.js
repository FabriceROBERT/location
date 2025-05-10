import React from "react";
import Container from "./Container";
import { FaArrowRight } from "react-icons/fa";

export default function HeroTop() {
  return (
    <Container className="flex flex-col content-center items-center justify-center">
      <div className="text-white shadowTitleSecondary w-full h-full my-28  brightness-100 flex flex-col heroTopFont  p-4 md:p-6">
        <span className="text-3xl sm:text-4xl md:text-5xl text-black">
          Location
        </span>
        <span className="text-4xl sm:text-6xl md:text-7xl text-black">
          Vidéobooth 360°
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl text-fuchsia-600">
          & <span className="text-black">Structure gonflable</span>
        </span>

        <button
          onClick={() =>
            document
              .getElementById("Products")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="rounded-lg flex gap-2 items-center justify-center bg-indigo-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md cursor-pointer text-sm sm:text-base md:text-lg text-white py-2 px-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-4 sm:mt-5 hover:animate-jiggle">
          Découvrir plus
          <FaArrowRight />
        </button>
      </div>
    </Container>
  );
}

import React from "react";
import ChateauImg from "../assets/img/Chateau-gonflable.jpg";
import Container from "./Container";

export default function CastleHeader() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 via-white to-white py-20">
      <Container className="flex flex-col lg:flex-row items-center justify-between py-10 gap-10">
        {/* Texte */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600">
            Location de{" "}
            <span className="text-pink-500">châteaux gonflables</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Offrez des heures de rire et de rebond à vos enfants avec nos
            structures sécurisées et colorées. Idéal pour anniversaires,
            kermesses et événements familiaux.
          </p>
          {/* <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:animate-jiggle font-semibold rounded-lg hover:scale-105 transition transform">
            Découvrir les services
            <FaArrowRight />
          </button> */}
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={ChateauImg}
            alt="Château gonflable"
            className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
          />
        </div>
      </Container>
    </section>
  );
}

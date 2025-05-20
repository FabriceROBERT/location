import React, { useState, useEffect } from "react";
import Container from "../Container";
import { TbTriangleFilled } from "react-icons/tb";
import VideoImage from "../../assets/img/femmes.webp";

export default function VideoboothHeader() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative lg:h-[100vh] h-[90vh] w-full overflow-hidden">
      {/* Fond avec overlay gradient */}
      <div className="absolute -z-10 inset-0 bg-slate-800">
        {/* Option 1: Utiliser une image d'arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
      </div>

      {/* Contenu principal */}
      <Container className="relative z-40 h-full flex flex-col lg:flex-row items-center justify-between py-16">
        {/* Texte à gauche */}
        <div
          className={`lg:w-1/2 heroTopFont space-y-6 mt-20 md:mt-5 text-white max-w-xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
          <h1 className="text-2xl md:text-5xl lg:mt-10 lg:text-5xl font-bold leading-tight">
            Réservez votre <br />{" "}
            <span className=" shadowTitleTertiary text-indigo-500">
              Videobooth
            </span>
          </h1>

          <p className="text-sm md:text-lg text-gray-300 ">
            Immortalisez les moments magiques de votre événement avec notre
            Videobooth professionnel. Une expérience unique pour vous et vos
            invités.
          </p>

          <div className="flex flex-wrap flex-col gap-4 pt-2">
            <button
              onClick={() =>
                document
                  .getElementById("Steps")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 shadow-lg cursor-pointer  bg-indigo-600 hover:animate-jiggle hover:bg-indigo-700 transition-colors text-white rounded-lg font-medium">
              Découvrir les formules
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 md:pt-6">
            <div className="flex -space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-400 flex items-center justify-center text-white">
                +
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            </div>
            <p className="text-gray-300 text-sm">
              <span className="font-bold">20+</span> événements réalisés
            </p>
          </div>
        </div>
        {/* Vidéo/Image à droite avec animation */}
        <div
          className={`lg:w-1/2 mt-10 lg:mt-0 flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
          <div className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl max-md:hidden">
            <img
              src={VideoImage}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Bouton Play affiché si non joué */}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-all group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <TbTriangleFilled className="text-slate-700 text-3xl rotate-[-270deg]" />
                </div>
                <span className="mt-4 text-white font-medium">
                  Voir en action
                </span>
              </button>
            )}

            {/* Vidéo YouTube affichée une fois le bouton cliqué */}
            {isPlaying && (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/EYAQIXZ5rhM?autoplay=1&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            )}
          </div>
        </div>
      </Container>

      {/* Formes décoratives */}
      <div className="absolute z-10 -bottom-16 -left-16 w-64 h-64 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute z-10 -top-24 -right-16 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>

      {/* Vagues en bas */}
      <div className="absolute z-10 bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="0.05"
            d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

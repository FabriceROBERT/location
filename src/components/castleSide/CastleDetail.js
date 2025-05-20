import React, { useState } from "react";
import ChateauImg from "../../assets/img/Chateau-gonflable.jpg";
import ChateauImg2 from "../../assets/img/Chateau-gonflable-2.jpg";
import ChateauImg3 from "../../assets/img/Chateau-gonflable-3.jpg";

export default function CastleDetail() {
  const [mainImage, setMainImage] = useState(ChateauImg);

  const images = [
    { src: ChateauImg, alt: "Vue principale du château gonflable" },
    { src: ChateauImg2, alt: "Vue latérale du château gonflable" },
    { src: ChateauImg3, alt: "Vue avec toboggan du château gonflable" },
  ];

  const features = [
    { icon: "🎮", text: "Aire de jeu combinée" },
    { icon: "🛝", text: "Toboggan + Zone de rebond fermée" },
    { icon: "👶", text: "6-8 enfants max" },
    { icon: "🧒", text: "De 4 à 8 ans" },
    { icon: "📏", text: "Dimensions : 3m x 3m x 2,05m" },
    { icon: "✅", text: "Normes CE" },
    { icon: "🧹", text: "Nettoyage systématique" },
    { icon: "💨", text: "Souffleur fourni" },
    { icon: "🏠", text: "Intérieur ou extérieur" },
  ];

  return (
    <div className="w-full mx-auto py-8 px-4 bg-white rounded-lg shadow-md">
      <div className="heroTopFont">
        <h1 className="text-3xl font-bold pb-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
          Château Gonflable Aventure
        </h1>
      </div>
      {/* Main content section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Main image */}
        <div className="lg:w-1/2">
          <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
            <img
              src={mainImage}
              alt="Château gonflable"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/70 to-transparent p-4">
              <span className="inline-block text-white bg-purple-900 font-bold px-3 py-1 rounded-full text-sm">
                90€ la journée
              </span>
            </div>
          </div>

          {/* Thumbnail gallery */}
          <div className="flex justify-center mt-4 gap-3">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                  mainImage === image.src
                    ? "border-purple-600 scale-105"
                    : "border-gray-200 opacity-70 hover:opacity-100"
                }`}
                onClick={() => setMainImage(image.src)}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details section */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="bg-purple-50 p-6 rounded-lg shadow-md flex-grow">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              Description
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Offrez à votre enfant un anniversaire inoubliable avec notre
              château gonflable coloré et amusant ! Idéal pour les jeunes
              enfants, il apportera une touche de magie à toutes vos fêtes de
              famille, kermesses, ou événements en plein air.
            </p>
            <h3 className="text-xl font-semibold text-purple-700 mb-3">
              Caractéristiques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="text-xl mr-2">{feature.icon}</span>
                  <span className="text-gray-800">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <p className="text-yellow-800 font-medium">
                  <span className="font-bold">
                    Matériel propre et entretenu
                  </span>{" "}
                  : Nous garantissons un nettoyage systématique entre chaque
                  location pour la sécurité des enfants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reservation section */}
      <div
        id="reservation"
        className="mt-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Réservez dès maintenant
        </h2>
        <p className="text-center mb-6">
          Contactez-nous pour réserver votre château gonflable et services
          additionnels. Nous vous proposons un devis gratuit et personnalisé
          selon vos besoins.
        </p>
        <div className="flex justify-center">
          <a
            href="tel:0651486384"
            className="bg-white text-purple-700 hover:bg-purple-700 hover:text-white font-bold py-3 px-8 rounded-full shadow-md transition-all transform hover:scale-105">
            Appeler maintenant
          </a>
        </div>
      </div>
    </div>
  );
}

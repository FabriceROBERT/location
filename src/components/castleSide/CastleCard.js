import React, { useState } from "react";

// Composant CastleCard pour chaque château
function CastleCard({ title, images, features, description, price }) {
  const [mainImage, setMainImage] = useState(images[0].src);

  return (
    <div className="w-full mx-auto py-8 px-4 bg-white rounded-lg mb-10">
      <div className="heroTopFont">
        <h1 className="text-3xl font-bold pb-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
          {title}
        </h1>
      </div>

      {/* Main content section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Main image */}
        <div className="lg:w-1/2">
          <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/70 to-transparent p-4">
              <span className="inline-block text-white bg-purple-900 font-bold px-3 py-1 rounded-full text-sm">
                {price}€ la journée
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
            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
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
    </div>
  );
}
export default CastleCard;

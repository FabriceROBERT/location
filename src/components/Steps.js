import React, { useState } from "react";
import {
  Phone,
  Mail,
  Map,
  Calendar,
  Camera,
  PlayCircle,
  Image,
} from "lucide-react";
import VideoboothTitle from "../assets/img/Festif Location - Tarif Vidéobooth (2).png";
import { motion, AnimatePresence } from "framer-motion";
import Femmes from "../assets/img/femmes.webp";
import Femmes2 from "../assets/img/femme.webp";
import VideoboothPhoto from "../assets/img/5518c04efe92be1bbaa7a3066f2507c7140d9fef.webp";
import VideoboothPhoto2 from "../assets/img/videobooth-photobooth360-mariage-location_3_187143-172143919291440.jpeg";
import VideoboothPhoto3 from "../assets/img/fotomaton-video-360.webp";
import VideoboothPhoto4 from "../assets/img/6450aeee8b49937d2a4135ac-360-photo-booth-video-booth-platform-500x500.webp";
import Container from "./Container";

// Exemple galerie
const galleryImages = [
  { id: 1, src: Femmes, alt: "Image 1" },
  { id: 2, src: Femmes2, alt: "Image 2" },
  { id: 3, src: VideoboothPhoto, alt: "Image 3" },
  { id: 4, src: VideoboothPhoto2, alt: "Image 4" },
  { id: 5, src: VideoboothPhoto3, alt: "Image 5" },
  { id: 6, src: VideoboothPhoto4, alt: "Image 6" },
];

export default function Steps({ id }) {
  const [activeTab, setActiveTab] = useState("comment");

  const steps = [
    {
      id: 1,
      title: "Choisissez votre formule",
      description:
        "Sélectionnez la formule Videobooth qui correspond le mieux à votre événement et à vos besoins.",
      icon: <Calendar className="w-8 h-8 text-white" />,
    },
    {
      id: 2,
      title: "Personnalisation",
      description:
        "Personnalisez votre expérience avec nos options de fond, d'effets et d'accessoires.",
      icon: <Camera className="w-8 h-8 text-white" />,
    },
    {
      id: 3,
      title: "Installation le jour J",
      description:
        "Notre équipe installe et configure tout le matériel nécessaire avant votre événement.",
      icon: <PlayCircle className="w-8 h-8 text-white" />,
    },
    {
      id: 4,
      title: "Amusez-vous",
      description:
        "Vos invités profitent du Videobooth pour créer des souvenirs uniques pendant votre événement.",
      icon: <Image className="w-8 h-8 text-white" />,
    },
  ];

  const formulas = [
    {
      name: "Essentiel",
      price: "249€",
      bg: "bg-indigo-600",
      features: [
        "2h de location",
        "Animateurs présents sur place",
        "Vidéos illimitées",
        "Filtres personnalisés, musique au choix",
        "Livraison et désinstallation",
      ],
    },
    {
      name: "Premium",
      price: "395€",
      bg: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      features: [
        "3h de location",
        "Animateurs présents sur place",
        "Vidéos illimitées",
        "Filtres personnalisés, musique au choix",
        "Livraison et désinstallation",
        "Accessoires",
        "Barrières de sécurité et tapis rouge",
      ],
    },
    {
      name: "Prestige",
      price: "449€",
      bg: "bg-indigo-600",
      features: [
        "4h de location",
        "Animateurs présents sur place",
        "Vidéos illimitées",
        "Filtres personnalisés, musique au choix",
        "Livraison et désinstallation",
        "Accessoires",
        "Barrières de sécurité et tapis rouge",
        "Propulseur de fumée",
        "Chevalet personnalisé",
      ],
    },
  ];

  const tabs = {
    comment: (
      <>
        <h2 className="text-center text-2xl sm:text-3xl snap-start font-semibold mt-10">
          Comment ça marche ?
        </h2>
        <p className="mt-6 mb-14 mx-auto max-w-2xl text-center text-base sm:text-lg text-gray-600">
          Découvrez les 4 étapes simples pour profiter de notre expérience
          Videobooth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-indigo-400 p-6 rounded-xl group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 bg-indigo-100 rounded-full w-14 h-14 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-indigo-500 font-bold text-lg">
                  0{step.id}
                </span>
              </div>
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">
                {step.title}
              </h3>
              <p className="text-white text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </>
    ),
    reserver: (
      <>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mt-10">
          Réserver notre Videobooth
        </h2>
        <p className="mt-6 mb-14 mx-auto max-w-2xl text-center text-base sm:text-lg text-gray-600">
          Choisissez la formule qui vous convient et contactez-nous.
        </p>
        <div className="space-y-6 w-full">
          <div className="heroTopFont cla">
            <h3 className="text-xl  font-bold mb-4 text-indigo-700 text-center">
              Nos formules
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {formulas.map((formule, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-lg text-white flex flex-col justify-between ${formule.bg}`}>
                <div>
                  <h4 className="text-2xl font-bold mb-2">
                    Formule {formule.name}
                  </h4>
                  <p className="text-4xl font-extrabold mb-4">
                    {formule.price}
                  </p>
                  <ul className="space-y-2 text-white/90 text-sm list-disc pl-5">
                    {formule.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition">
                  Réserver cette formule
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
    galerie: (
      <>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mt-10">
          Notre Galerie
        </h2>
        <p className="mt-6 mb-14 mx-auto max-w-2xl text-center text-base sm:text-lg text-gray-600">
          Découvrez les meilleures photos prises lors de nos événements.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-lg border-2 border-purple-600">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </>
    ),
  };

  return (
    <div className="bg-white sticky mb-20 pb-20 z-40 shadow-lg mt-4 md:-mt-10 mx-2 sm:mx-4 rounded-3xl">
      {/* Onglets */}
      <div
        id={id}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-1 rounded-t-3xl w-full">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-6 pb-4 px-4">
          {["comment", "reserver", "galerie"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg ${
                activeTab === tab ? "bg-indigo-500 text-white" : "text-white"
              }`}
              aria-selected={activeTab === tab}>
              {tab === "comment" && "Comment ça marche"}
              {tab === "reserver" && "Formules"}
              {tab === "galerie" && "Galerie"}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu animé */}
      <Container className="px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}>
            {tabs[activeTab]}
          </motion.div>
        </AnimatePresence>
      </Container>
    </div>
  );
}

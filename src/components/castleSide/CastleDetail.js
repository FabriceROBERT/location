import React, { useState } from "react";
import ChateauImg from "../../assets/img/Chateau-gonflable.jpg";
import ChateauImg2 from "../../assets/img/Chateau-gonflable-2.jpg";
import ChateauImg3 from "../../assets/img/Chateau-gonflable-3.jpg";
// Ajoutez vos nouvelles images pour le second château
import ChateauImg4 from "../../assets/img/Castle2.webp";
import ChateauImg5 from "../../assets/img/Castle3.webp";
import ChateauImg6 from "../../assets/img/Castle4.webp";

import CastleCard from "./CastleCard";

export default function CastleDetail() {
  const commonFeatures = [
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

  const multicolorXL = [
    { icon: "🎮", text: "Aire de jeu XL" },
    { icon: "🛝", text: "Multi-toboggan + Grande zone de rebond" },
    { icon: "👶", text: "10-12 enfants max" },
    { icon: "🧒", text: "De 5 à 10 ans" },
    { icon: "📏", text: "Dimensions : 424cm x 300m x 240m" },
    { icon: "✅", text: "Normes CE" },
    { icon: "🧹", text: "Nettoyage systématique" },
    { icon: "💨", text: "Souffleur industriel fourni" },
    { icon: "🏠", text: "Extérieur uniquement" },
    { icon: "🔴", text: "Piscine à balles colorées en supplément" },
  ];

  const castles = [
    {
      title: "Château Gonflable Aventure",
      description:
        "Offrez à votre enfant un anniversaire inoubliable avec notre château gonflable coloré et amusant ! Idéal pour les jeunes enfants, il apportera une touche de magie à toutes vos fêtes de famille, kermesses, ou événements en plein air.",
      images: [
        { src: ChateauImg, alt: "Vue principale du château gonflable" },
        { src: ChateauImg2, alt: "Vue latérale du château gonflable" },
        { src: ChateauImg3, alt: "Vue avec toboggan du château gonflable" },
      ],
      features: commonFeatures,
      price: 90,
    },
    {
      title: "Château Multicolore XL",
      description:
        "Notre château gonflable multicolore XL avec ses toboggans doubles et sa grande zone de jeu ! Parfait pour des groupes plus importants et les enfants plus grands. Avec ses couleurs vives et ses multiples espaces de jeu, c'est l'attraction parfaite pour vos événements.",
      images: [
        { src: ChateauImg4, alt: "Vue principale du château jungle" },
        { src: ChateauImg5, alt: "Vue latérale du château jungle" },
        { src: ChateauImg6, alt: "Vue avec multi-toboggan du château jungle" },
      ],
      features: multicolorXL,
      price: 100,
    },
  ];

  return (
    <div>
      <div className="flex flex-nowrap gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 py-6 lg:flex-wrap lg:overflow-visible lg:px-0">
        {castles.map((castle, index) => (
          <div
            key={index}
            className="snap-start shrink-0 w-[90%] md:w-[70%] lg:w-full">
            <CastleCard {...castle} />
          </div>
        ))}
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

import React from "react";
import Marquee from "react-fast-marquee";
import Image1 from "../assets/img/IMG_0440.JPG.webp";
import Image2 from "../assets/img/kermesse.jpg";
import Image3 from "../assets/img/cotton-candy-girl.webp";
import Image4 from "../assets/img/machines.jpg";

export default function () {
  return (
    <div>
      <Marquee>
        <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
          <img
            src={Image1}
            alt="Image 1"
            className="w-72 h-72 object-cover rounded-lg"
          />
          <img
            src={Image2}
            alt="Image 1"
            className="w-72 h-72 object-cover rounded-lg"
          />
          <img
            src={Image3}
            alt="Image 1"
            className="w-72 h-72 object-cover rounded-lg"
          />
          <img
            src={Image4}
            alt="Image 1"
            className="w-72 h-72 object-cover rounded-lg"
          />
        </div>
      </Marquee>
      <Marquee direction="right">
        <div className="flex flex-row gap-20 py-10 text-lg font-bold text-gray-700">
          <span>“Un moment magique pour notre mariage !” — Julie & Maxime</span>
          <span>“Les enfants ont adoré le château !” — Famille Bernard</span>
          <span>
            “Le vidéobooth a mis l’ambiance à notre soirée d’entreprise !” —
            Clara, RH
          </span>
          <span>“Simple à réserver, équipe super sympa !” — Kevin M.</span>
        </div>
      </Marquee>
    </div>
  );
}

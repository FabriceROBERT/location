import React from "react";
import Container from "./Container";
import Img1 from "../assets/img/spinner-360-videobooth.gif";
import Img2 from "../assets/img/8c92da0b9ef3c1866979b766bf127e9e773593ee.jpg";

const content = [
  {
    title: "Un animateur présent sur place",
    image: Img1,
    paragraphs: [
      "Pour garantir une expérience optimale à vos invités, un opérateur dédié est présent sur place avec notre photobooth 360.",
      "Que ce soit pour expliquer les fonctionnalités du photobooth 360 ou simplement créer une ambiance conviviale, notre animateur s’assure que tout se déroule parfaitement.",
    ],
  },
  {
    title: "Animation vidéo en live avec effet de ralenti",
    image: Img2,
    paragraphs: [
      "Captant chaque moment en temps réel, Smakk permet à vos invités de créer des vidéos époustouflantes avec un effet de ralenti saisissant.",
      "Grâce à notre technologie de pointe, chaque mouvement est transformé en une œuvre d’art cinématographique.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-indigo-950 heroTopFont text-white py-20">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-16">
          Profitez d'une expérience{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            personnalisée
          </span>{" "}
          avec la location Videobooth 360
        </h2>

        <div className="space-y-20">
          {content.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
              <div className="w-full lg:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {item.title}
                </h3>
                {item.paragraphs.map((para, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import React, { useState } from "react";
import Container from "../Container";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien de temps dure l’installation du vidéobooth ?",
    answer:
      "L'installation prend généralement entre 30 et 45 minutes. Notre équipe arrive en avance pour tout mettre en place.",
  },
  {
    question: "Les vidéos sont-elles récupérables après l’événement ?",
    answer:
      "Oui, toutes les vidéos sont hébergées sur une galerie privée en ligne, accessible par lien sécurisé.",
  },
  {
    question: "Peut-on personnaliser l’arrière-plan ou la musique ?",
    answer:
      "Absolument ! Vous pouvez choisir les filtres, les musiques et même intégrer un branding personnalisé.",
  },
  {
    question: "Y a-t-il une assistance technique pendant l’événement ?",
    answer:
      "Oui, nos animateurs restent sur place pendant toute la durée de la prestation pour accompagner vos invités.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="heroTopFont">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-700">
            Questions fréquentes
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 bg-indigo-500 ">
                <div className="heroTopFont">
                  <span className="text-left font-medium text-white">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-5 py-2 pb-4 text-sm text-gray-700 transition-all duration-300 ease-in-out ${
                  openIndex === index ? "block" : "hidden"
                }`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

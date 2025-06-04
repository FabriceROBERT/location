import React from "react";
import { motion } from "framer-motion";
import BarbeAPapa from "../../assets/img/machin-bap.webp";
import Popcorn from "../../assets/img/machine-pc.jpg";
import Table from "../../assets/img/table-pliante.jpg";

export default function AdditionalService() {
  return (
    <div>
      <div className="mt-12 mb-20">
        <div className="heroTopFont">
          <h2 className="text-3xl font-bold py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 text-center">
            Services complémentaires
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🍭",
              title: "Barbe à Papa",
              text: "Ajoutez une touche sucrée à votre événement avec notre machine à barbe à papa (15 tiges avec 2 goûts au choix : Pomme, Fraise, Framboise, Piña Colada, Marshmallow, Cola).",
              color: "bg-pink-100",
              price: 30,
              image: BarbeAPapa,
            },
            {
              icon: "🍿",
              title: "Pop-Corn",
              text: "Régalez vos invités avec du pop-corn fraîchement préparé dans notre machine. Gout sucré, salé ou caramélisé.",
              color: "bg-yellow-100",
              image: Popcorn,
            },
            {
              icon: "🪑",
              title: "Tables & Chaises",
              text: "Nous proposons également la location de tables et chaises pour votre confort.",
              color: "bg-blue-100",
              image: Table,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="rounded-xl mb-10">
                <img
                  src={item.image}
                  className="rounded-xl w-full h-52 object-cover"
                  alt={item.title}
                />
              </div>
              <div
                className={`${item.color} w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4`}>
                <span className="text-3xl">{item.icon}</span>
              </div>
              <div className="heroTopFont">
                <h3 className="text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-center mb-2">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

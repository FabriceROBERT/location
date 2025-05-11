import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Instagram from "../assets/svg/instagram.svg";
import Snapchat from "../assets/svg/snapchat.svg";
import Whatsapp from "../assets/svg/whatsapp.svg";
import Logo from "../assets/img/Logo.png";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-10 pb-6 px-6 md:px-16">
      <div className="grid md:grid-cols-3 gap-12 mb-10">
        {/* Logo & description */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Logo" className="w-36 object-contain mb-4" />
          <p className="text-sm text-center md:text-left text-gray-300">
            Festif Location vous accompagne pour rendre vos événements
            inoubliables grâce à des expériences immersives et interactives
            autour du vidéobooth 360°.
          </p>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Liens utiles
          </h3>
          <ul className="space-y-2 text-sm text-center md:text-left text-gray-300">
            <li>
              <a href="/reservation-chateau" className="hover:text-white">
                Château gonflable
              </a>
            </li>
            <li>
              <a href="/reservation-videobooth" className="hover:text-white">
                Videobooth 360°
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & réseaux */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contact
          </h3>
          <div className="flex items-center mb-2 text-sm text-gray-300">
            <FaPhone className="mr-2 " />
            +33 6 51 61 08 33
          </div>
          <div className="flex items-center mb-4 text-sm text-gray-300">
            <FaEnvelope className="mr-2 " />
            festif.location75@gmail.com
          </div>
          <p className="text-sm text-gray-400 mb-2">Disponibilité : 7j/7</p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://www.instagram.com/festif.location"
              target="_blank"
              rel="noreferrer">
              <img
                src={Instagram}
                alt="Instagram"
                className="h-7 w-7 bg-white rounded-full p-1"
              />
            </a>
            <a
              href="https://www.snapchat.com/add/festif.location"
              target="_blank"
              rel="noreferrer">
              <img
                src={Snapchat}
                alt="Snapchat"
                className="h-7 w-7 bg-white rounded-full p-1"
              />
            </a>
            <a
              href="https://wa.me/33651486384"
              target="_blank"
              rel="noreferrer">
              <img
                src={Whatsapp}
                alt="WhatsApp"
                className="h-7 w-7 bg-white rounded-full p-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>@festiflocation {date}. Tous droits réservés.</p>
        <a href="/cvg" className="hover:text-white">
          Mentions légales
        </a>
        <p>Site réalisé par Festif.location</p>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CastleHeader from "../components/castleSide/CastleHeader";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import CastleDetail from "../components/castleSide/CastleDetail";
import AdditionalService from "../components/castleSide/AdditionalService";
import Tarif from "../assets/img/Tarif Château gonflable.png";

export default function CastlePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="snap-mandatory snap-y">
      <Navbar />
      <CastleHeader />
      <CastleDetail />
      <AdditionalService />

      {/* Clic pour fullscreen */}
      <div className="mx-auto my-8 w-full max-w-md aspect-[4/3] cursor-zoom-in">
        <img
          src={Tarif}
          className="h-full w-full object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          alt="Tarif Château"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Modal plein écran */}
      {open && (
        <div
          className="fixed z-50 inset-0 bg-black/80 flex justify-center items-center"
          onClick={() => setOpen(false)}>
          <img
            src={Tarif}
            className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-2xl border-4 border-white"
            alt="Tarif Château plein écran"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Bouton fermer */}
          <button
            className="absolute top-4 right-4 text-white text-3xl bg-black/40 rounded-full p-2 hover:bg-black/70 transition"
            onClick={() => setOpen(false)}
            aria-label="Fermer">
            &times;
          </button>
        </div>
      )}

      <Booking id="Booking" className="snap-start" />
      <Footer />
    </div>
  );
}

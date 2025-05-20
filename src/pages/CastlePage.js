import React from "react";
import Navbar from "../components/Navbar";
import CastleHeader from "../components/castleSide/CastleHeader";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import CastleDetail from "../components/castleSide/CastleDetail";
import AdditionalService from "../components/castleSide/AdditionalService";

export default function CastlePage() {
  return (
    <div className="snap-mandatory snap-y">
      <Navbar />
      <CastleHeader />
      <CastleDetail />
      <AdditionalService />
      {/* <CarouselCastel /> */}
      <Booking id="Booking" className="snap-start" />
      <Footer />
    </div>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import CastleHeader from "../components/CastleHeader";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import CastleDetail from "../components/CastleDetail";
import AdditionalService from "../components/AdditionalService";

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

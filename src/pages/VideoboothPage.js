import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import VideoboothHeader from "../components/VideoboothHeader";
import Steps from "../components/Steps";
import FAQ from "../components/FAQ";
import ExperienceSection from "../components/ExperienceSection.js";

export default function VideoboothPage() {
  return (
    <div className="snap-y snap-mandatory">
      <Navbar />
      <VideoboothHeader className="snap-start" />
      <Steps className="snap-start" id="Steps" />
      <ExperienceSection />
      <FAQ />
      <Booking id="Booking" className="snap-start" />
      <Footer />
    </div>
  );
}

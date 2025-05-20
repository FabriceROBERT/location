import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import VideoboothHeader from "../components/videoboothSide/VideoboothHeader.js";
import Steps from "../components/videoboothSide/Steps";
import FAQ from "../components/videoboothSide/FAQ";
import ExperienceSection from "../components/videoboothSide/ExperienceSection.js";

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

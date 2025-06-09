import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import VideoboothHeader from "../components/videoboothSide/VideoboothHeader.js";
import Steps from "../components/videoboothSide/Steps";
import FAQ from "../components/videoboothSide/FAQ";
import F2 from "../assets/video/F2.mp4";
import F3 from "../assets/video/F3.mp4";
import F4 from "../assets/video/F4.mp4";
import ExperienceSection from "../components/videoboothSide/ExperienceSection.js";

export default function VideoboothPage() {
  return (
    <div className="snap-y snap-mandatory">
      <Navbar />
      <VideoboothHeader className="snap-start" />
      <Steps className="snap-start" id="Steps" />
      <div className="flex flex-row flex-wrap mb-20 items-center justify-center gap-4">
        <video
          src={F2}
          autoPlay
          loop
          muted
          className="w-40 h-72 lg:w-96 lg:h-1/4 object-cover rounded-xl shadow-lg"
        />
        <video
          src={F3}
          autoPlay
          loop
          muted
          className="w-40 h-72 lg:w-96 lg:h-1/4  object-cover rounded-xl shadow-lg"
        />
        <video
          src={F4}
          autoPlay
          loop
          muted
          className="w-40 h-72 lg:w-96 lg:h-1/4 object-cover rounded-xl shadow-lg"
        />
      </div>

      <ExperienceSection />
      <FAQ />
      <Booking id="Booking" className="snap-start" />
      <Footer />
    </div>
  );
}

import React from "react";
import Femme from "../assets/img/femme.webp";

export default function () {
  return (
    <div className="flex flex-row w-full items-center justify-around">
      <div className="heroTopFont shadowTitleSecondary ">
        <span className="text-3xl sm:text-4xl md:text-5xl">
          Reservez votre Videobooth
        </span>
      </div>
      <div className="h-72 w-72 relative">
        <img src={Femme} alt="" className="object-cover h-full w-full" />
      </div>
    </div>
  );
}

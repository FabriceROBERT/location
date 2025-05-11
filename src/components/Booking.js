import React from "react";
import Sticker from "../assets/img/sticker-1.png";
import CottonCandy from "../assets/img/cotton candy.png";
import Popcorn from "../assets/img/Popcorn Sticker-Photoroom.png";
import HeadingTitles from "../typography/HeadingTitles";
import { useForm } from "react-hook-form";

export default function Booking({ id }) {
  const { register, handleSubmit, watch } = useForm();
  const equipment = watch("equipment");

  const onSubmit = (data) => {
    const formatDate = (rawDate) => {
      const dateObj = new Date(rawDate);
      const day = String(dateObj.getDate()).padStart(2, "0");
      const month = String(dateObj.getMonth() + 1).padStart(2, "0");
      const year = dateObj.getFullYear();
      return `${day}/${month}/${year}`;
    };

    let equipmentLabel = data.equipment;

    if (equipmentLabel === "both") {
      equipmentLabel = "Videobooth et château gonflable";
    } else if (equipmentLabel === "videobooth") {
      equipmentLabel = "Videobooth 360° uniquement";
    } else if (equipmentLabel === "chateau") {
      equipmentLabel = "Château gonflable uniquement";
    }

    let eventLabel = data.event;

    if (eventLabel === "mariage") {
      eventLabel = "Mariage";
    } else if (eventLabel === "anniversaire") {
      eventLabel = "Anniversaire";
    } else if (eventLabel === "entreprise") {
      eventLabel = "Événement d’entreprise";
    } else if (eventLabel === "autre") {
      eventLabel = "Autre événement";
    }

    const body = `
Nom : ${data.name}
Email : ${data.email}
Téléphone : ${data.phone}
Type d'événement : ${eventLabel}
Date : ${formatDate(data.date)}
Équipement souhaité : ${equipmentLabel}
Durée : ${data.duration}
Adresse : ${data.address}
Message : ${data.message}
    `.trim();

    const subject = `Demande de réservation de ${equipmentLabel} le ${formatDate(
      data.date
    )}`;
    const mailtoLink = `mailto:festif.location75@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <div id={id} className="relative pb-10 ">
      <img
        src={Sticker}
        alt=""
        className="absolute invisible hover:animate-pulse cursor-grab lg:visible top-40 left-0 z-10"
      />
      <img
        src={CottonCandy}
        alt=""
        className="absolute invisible hover:animate-wiggle cursor-grab lg:visible -right-10  lg:block bottom-80"
      />
      <img
        src={Popcorn}
        alt=""
        className="absolute hover:animate-jiggle cursor-grab invisible rotate-12 lg:visible lg:block h-56 w-56 -left-0 bottom-32"
      />
      <div className="md:max-w-3xl mx-auto md:py-20 px-10">
        <div className="inoubliable">
          <HeadingTitles
            theme="secondary"
            alignement="center"
            className=" text-3xl text-center text-gray-700">
            Formulaire de contact
          </HeadingTitles>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-x-7 gap-y-6 mt-20">
          <div>
            <label htmlFor="name" className="text-gray-700 font-medium">
              Nom :{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              className="border border-gray-400 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md p-5 bg-white"
              placeholder="DUPONT Marie"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email :{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              className="border border-gray-400 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md p-5 bg-white"
              placeholder="exemple@email.com"
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-700 font-medium">
              Téléphone :{" "}
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="off"
              className="border border-gray-400 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md p-5 bg-white"
              placeholder="06 XX XX XX XX"
              {...register("phone")}
            />
          </div>
          <div>
            <label htmlFor="event" className="text-gray-700 font-medium">
              Type d'événement :{" "}
            </label>
            <select
              name="event"
              id="event"
              className="border border-gray-400 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md p-5 bg-white"
              {...register("event")}>
              <option value="">Sélectionnez un type d'événement</option>
              <option value="mariage">Mariage</option>
              <option value="anniversaire">Anniversaire</option>
              <option value="entreprise">Événement d'entreprise</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="text-gray-700 font-medium">
              Date :{" "}
            </label>
            <input
              type="date"
              name="date"
              id="date"
              autoComplete="off"
              className="border border-gray-400 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md p-5 bg-white"
              {...register("date")}
            />
          </div>
          <div>
            <label htmlFor="equipment" className="text-gray-700 font-medium">
              Équipement souhaité :
            </label>
            <select
              id="equipment"
              className="border border-gray-400 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md p-5 bg-white"
              {...register("equipment", { required: true })}>
              <option value="">Sélectionnez un équipement</option>
              <option value="videobooth">Videobooth 360° uniquement</option>
              <option value="chateau">Château gonflable uniquement</option>
              <option value="both">Les deux équipements</option>
            </select>
          </div>

          <div>
            <label htmlFor="duration" className="text-gray-700 font-medium">
              Durée de location :
            </label>
            <select
              key={equipment}
              id="duration"
              className="border border-gray-400 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md p-5 bg-white"
              {...register("duration", { required: true })}>
              <option value="">Sélectionnez une durée</option>

              {equipment === "chateau" && (
                <option value="journee">Journée complète</option>
              )}

              {equipment === "videobooth" && (
                <>
                  <option value="2h">2 heures</option>
                  <option value="3h">3 heures</option>
                  <option value="4h">4 heures</option>
                </>
              )}

              {equipment === "both" && (
                <>
                  <option value="3h">3 heures</option>
                  <option value="4h">4 heures</option>
                  <option value="journee">Journée complète</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label htmlFor="address" className="text-gray-700 font-medium">
              Adresse de l'événement :{" "}
            </label>
            <input
              required
              type="text"
              name="address"
              id="address"
              autoComplete="off"
              className="border border-gray-400 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md p-5 bg-white"
              placeholder="123 rue des Lilas, 75000 Paris"
              {...register("address")}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="text-gray-700 font-medium">
              Message :{" "}
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              autoComplete="off"
              className="border border-gray-400 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md p-5 bg-white"
              placeholder="Informations complémentaires..."
              {...register("message")}></textarea>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="Send" className="invisible">
              Réserver
            </label>
            <input
              type="submit"
              name="Send"
              id="Send"
              autoComplete="off"
              className="bg-gradient-to-r from-purple-600 to-indigo-700 cursor-pointer hover:from-purple-700 hover:to-indigo-800 w-full text-white font-secondary tracking-widest rounded-md animate uppercase py-5 transition duration-300 shadow-lg"
              value="Réservez"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

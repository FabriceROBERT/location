import { CheckIcon } from "@heroicons/react/20/solid";
import Chateau from "../assets/img/chateau-1.png";
import Videobooth from "../assets/img/videobooth-1-Photoroom.png";
import { useEffect, useState, useRef } from "react";
import "../css/App.css";

const tiers = [
  {
    name: "Location de château gonflable",
    id: "tier-chateau",
    href: "reservation-chateau",
    price: "90€",
    description:
      "Parfait pour animer les anniversaires et les fêtes d'enfants. Facile à installer et sécurisé.",
    features: [
      "Convient pour 8 à 10 enfants",
      "Installation rapide 30 min",
      "Livraison dans tout l'Ile-De-France",
      "Matériel aux normes CE",
    ],
    featured: false,
    image: Chateau,
    color: "indigo",
  },
  {
    name: "Location de Videobooth 360°",
    id: "tier-videobooth",
    href: "reservation-videobooth",
    price: "249€",
    description:
      "L'animation photo/vidéo incontournable pour vos mariages, soirées et évènements corporate.",
    features: [
      "Plateforme 360° avec bras motorisé",
      "Vidéos instantanées avec effets et musiques",
      "Assistant sur place pendant 3h",
      "Personnalisation de vos vidéos",
      "Livraison, installation & démontage inclus",
    ],
    featured: true,
    image: Videobooth,
    color: "indigo",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Products({ id }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quand la section devient visible à 20% ou plus
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Déclencher quand 20% de l'élément est visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className={classNames(
            "mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-0 transition-all duration-1000",
            isVisible ? "opacity-30 translate-y-0" : "translate-y-8"
          )}
        />
      </div>
      <div
        className={classNames(
          "mx-auto max-w-4xl text-center transition-all duration-700 transform inoubliable",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
        <div className="text-center heroTopFont">
          <h2 className="mt-6 text-lg font-semibold text-indigo-600">
            Nos offres de location
          </h2>
        </div>
        <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto">
          Choisissez parmi nos formules personnalisées de vidéobooth 360° et de
          châteaux gonflables pour faire de votre événement un moment unique.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 z-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-gray-900 shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 z-20 relative overflow-hidden group transition-all duration-300 hover:shadow-xl",
              "transition-all duration-1000 transform",
              isVisible
                ? "opacity-100 translate-y-0"
                : `opacity-0 ${
                    tierIdx === 0 ? "translate-x-12" : "-translate-x-12"
                  }`
            )}
            style={{
              transitionDelay: `${300 + tierIdx * 300}ms`,
            }}>
            {/* Image améliorée avec effet de transition */}
            <div className="absolute right-0 bottom-0 w-full h-full z-0 flex justify-end items-end">
              <div className="relative overflow-hidden">
                <img
                  src={tier.image}
                  alt=""
                  className={classNames(
                    "transition-all duration-700 transform",
                    tier.featured ? "w-72 h-72" : "w-48 h-48 opacity-70",
                    isVisible
                      ? "opacity-100 translate-y-0 rotate-0"
                      : "opacity-0 translate-y-16 rotate-12",
                    "group-hover:scale-105"
                  )}
                  style={{
                    transitionDelay: `${800 + tierIdx * 300}ms`,
                  }}
                />
              </div>
            </div>

            <div className="relative z-10">
              {" "}
              {/* Contenu au premier plan */}
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-indigo-400" : "text-indigo-600",
                  "text-base/7 font-semibold mb-2 transition-all duration-700 transform",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8"
                )}
                style={{
                  transitionDelay: `${400 + tierIdx * 300}ms`,
                }}>
                {tier.name}
              </h3>
              <p
                className={classNames(
                  "flex items-baseline gap-x-2 relative transition-all duration-700 transform",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8"
                )}
                style={{
                  transitionDelay: `${500 + tierIdx * 300}ms`,
                }}>
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-5xl font-bold tracking-tight"
                  )}>
                  {tier.price}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-gray-400" : "text-gray-500",
                    "text-base"
                  )}>
                  {tier.featured ? "/ 2 heures" : "/ jour"}
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 text-base/7 font-medium transition-all duration-700 transform",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8"
                )}
                style={{
                  transitionDelay: `${600 + tierIdx * 300}ms`,
                }}>
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-4 text-sm/6 sm:mt-10"
                )}>
                {tier.features.map((feature, featureIdx) => (
                  <li
                    key={feature}
                    className={classNames(
                      "flex gap-x-3 items-center transition-all duration-500 transform group-hover:translate-x-1",
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    )}
                    style={{
                      transitionDelay: `${
                        700 + tierIdx * 200 + featureIdx * 100
                      }ms`,
                    }}>
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-indigo-400" : "text-indigo-600",
                        "h-5 w-5 flex-none"
                      )}
                    />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "text-indigo-600 bg-white ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 hover:bg-indigo-50 focus-visible:outline-indigo-600",
                  "mt-8 block rounded-md px-3.5 py-3 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 transition-all duration-700 transform hover:translate-y-px",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: `${1000 + tierIdx * 300}ms`,
                }}>
                Réserver maintenant
              </a>
            </div>

            {/* Effet de gradient en superposition */}
            <div
              className={classNames(
                "absolute inset-0 z-5 opacity-0 group-hover:opacity-20 transition-all duration-1000",
                tier.featured
                  ? "bg-gradient-to-br from-indigo-200 to-indigo-600"
                  : "bg-gradient-to-br from-indigo-100 to-indigo-400",
                isVisible ? "rounded-3xl" : "rounded-none scale-0"
              )}
              style={{
                transitionDelay: `${300 + tierIdx * 300}ms`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

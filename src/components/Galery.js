import React, { useState, useRef, useEffect } from "react";
import Marquee from "./Marquee";

export default function Galery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Classe conditionnelle
  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Déclenche à 30% visible
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div>
      <div ref={sectionRef} className="py-20">
        <div
          className={classNames(
            "mx-auto max-w-4xl text-center transition-all duration-700 transform inoubliable",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
          <p className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 text-balance">
            Rendez vos évènements inoubliables
          </p>
        </div>
        <p
          className={classNames(
            "mx-auto my-10 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 transition-all duration-700 delay-100 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
          Choisissez l'animation parfaite pour vos anniversaires, mariages,
          soirées d'entreprise ou fêtes familiales.
        </p>
      </div>
      <Marquee />
    </div>
  );
}

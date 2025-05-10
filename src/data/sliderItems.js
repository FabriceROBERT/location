import Chateau from "./../assets/img/chateau-1.png";
import Sticker from "./../assets/img/sticker-1.png";
import Videobooth from "./../assets/img/videobooth-1-Photoroom.png";

export const sliderItems = [
  {
    id: 1,
    img: Chateau,
    title: "DESIGN SLIDER",
    topic: "Château Gonflable",
    description:
      "Offrez des heures de divertissement avec notre château gonflable coloré et sécurisé.",
    detail: {
      title: "Château Gonflable Premium",
      description:
        "Ce château gonflable haut de gamme est parfait pour animer les fêtes d'anniversaire, kermesses ou événements privés.",
      specs: [
        { label: "À partir de", value: "90€ / jour" },
        { label: "Dimensions", value: "4m x 5m" },
        { label: "Capacité", value: "8 enfants" },
        { label: "Âge recommandé", value: "3 à 12 ans" },
        { label: "Installation", value: "15 minutes" },
      ],
      options: ["Machine à barbe à papa + Stickers déco", "Stand Hot-Dog"],
    },
  },
  {
    id: 2,
    img: Sticker,
    title: "DESIGN SLIDER",
    topic: "Château Gonflable",
    description:
      "Offrez des heures de divertissement avec notre château gonflable coloré et sécurisé.",
    detail: {
      title: "Château Gonflable Premium",
      description:
        "Ce château gonflable haut de gamme est parfait pour animer les fêtes d'anniversaire, kermesses ou événements privés.",
      specs: [
        { label: "À partir de", value: "90€ / jour" },
        { label: "Dimensions", value: "4m x 5m" },
        { label: "Capacité", value: "8 enfants" },
        { label: "Âge recommandé", value: "3 à 12 ans" },
        { label: "Installation", value: "15 minutes" },
      ],
      options: ["Machine à barbe à papa + Stickers déco", "Stand Hot-Dog"],
    },
  },
  {
    id: 3,
    img: Videobooth,
    title: "DESIGN SLIDER",
    topic: "Videobooth 360°",
    description:
      "Créez des souvenirs inoubliables avec notre plateforme vidéo immersive à 360°.",
    detail: {
      title: "Videobooth Premium 360°",
      description:
        "Notre Videobooth 360° capture des vidéos dynamiques et virales, idéales pour les mariages, soirées d’entreprise ou lancements de produits.",
      specs: [
        { label: "Prix de location", value: "350€ / jour" },
        { label: "Résolution vidéo", value: "4K Ultra HD" },
        { label: "Espace requis", value: "2m x 2m" },
        { label: "Capacité", value: "4 personnes" },
        { label: "Assistance sur place", value: "Incluse" },
      ],
      options: ["Tapis rouge", "Machine à fumée", "Pistolet à billets"],
    },
  },
];

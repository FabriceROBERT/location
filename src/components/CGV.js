import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function CGV() {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Conditions Générales de Vente – Festif Location
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1. Présentation de l'entreprise
          </h2>
          <p>
            Festif Location est une entreprise individuelle gérée par Monsieur
            <a
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              href="https://www.linkedin.com/in/fabrice-robert9536/"
              target="_blank"
              rel="noreferrer">
              {" "}
              ROBERT Fabrice
            </a>
            , spécialisée dans la location de vidéobooth 360° et de structures
            gonflables (châteaux gonflables) à destination des particuliers et
            des professionnels. Aucune adresse postale n’est communiquée
            publiquement, mais les échanges sont réalisés par voie électronique
            ou téléphonique.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2. Objet des présentes CGV
          </h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les
            relations contractuelles entre Festif Location et tout client
            procédant à une réservation de prestation. Toute commande implique
            l’acceptation pleine et entière des présentes CGV.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            3. Prestations proposées
          </h2>
          <ul className="list-disc list-inside">
            <li>La location de vidéobooth 360°, avec ou sans animateur</li>
            <li>La location de structures gonflables, livrées et installées</li>
            <li>La fourniture éventuelle d’accessoires complémentaires</li>
          </ul>
          <p className="mt-2">
            Les détails (durée, lieu, horaires, matériel, accompagnement) sont
            précisés dans un devis ou contrat signé entre les parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            4. Réservation et paiement
          </h2>
          <p>
            Toute réservation est considérée comme ferme à réception du contrat
            signé et du versement de l’acompte indiqué sur le devis (sauf
            exception écrite). Le solde est dû au plus tard le jour de la
            prestation, avant l’installation du matériel. En cas d’annulation
            par le client à moins de 7 jours de l'événement, l’acompte reste
            acquis à titre d’indemnité forfaitaire.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            5. Responsabilité du client
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Fournir un espace sécurisé et adapté à l’installation du matériel
            </li>
            <li>
              Superviser les enfants en cas de location de structure gonflable
            </li>
            <li>Respecter les horaires convenus dans le contrat</li>
          </ul>
          <p className="mt-2">
            Tout détérioration du matériel ou non-respect des consignes de
            sécurité engage la responsabilité du client, qui pourra être facturé
            en conséquence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Droit à l’image</h2>
          <p>
            En validant une commande, le client accepte expressément que les
            images, vidéos et contenus réalisés lors de l’événement avec le
            matériel fourni par Festif Location puissent être utilisés à des
            fins de communication et de promotion sur les réseaux sociaux ou le
            site web de l’entreprise. À ce titre, le client cède ses droits à
            l’image à titre gratuit, pour une durée illimitée et sans limitation
            géographique.
          </p>
          <p className="mt-2">
            Toute personne présente à l’événement est réputée informée. Si une
            opposition formelle est nécessaire pour un participant, elle doit
            être signalée par écrit avant la prestation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            7. Cas de force majeure
          </h2>
          <p>
            Festif Location se réserve le droit d’annuler ou de reporter une
            prestation en cas de force majeure (intempéries, panne majeure,
            maladie du prestataire, etc.). Dans ce cas, les sommes versées
            seront restituées ou reportées, sans autre compensation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            8. Litiges et droit applicable
          </h2>
          <p>
            Tout litige relatif aux présentes CGV ou à l’exécution d’une
            prestation est soumis au droit français. En cas de désaccord
            persistant, les parties s'engagent à rechercher une solution
            amiable. À défaut, les tribunaux compétents seront ceux du lieu de
            résidence du prestataire.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

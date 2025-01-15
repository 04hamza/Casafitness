import React, { useState, useEffect } from "react";
import "./Recrutement.css"; // CSS lié au design de la page

const Recrutement = () => {
  const [cv, setCv] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredOffers, setFilteredOffers] = useState([]);
  
  const jobOffers = [
    {
      title: "Personal Trainer Indépendant H/F",
      type: "Indépendant",
      location: "Casablanca",
      description: "Rejoignez notre équipe dynamique en tant que Personal Trainer indépendant et aidez nos clients à atteindre leurs objectifs de fitness.",
    },
    {
      title: "Commercial - Salle de Sport H/F",
      type: "CDI",
      location: "Rabat",
      description: "Vous êtes passionné par le sport et avez une expérience dans la vente ? Rejoignez notre équipe commerciale à Rabat !",
    },
    {
      title: "Commercial - Salle de Sport H/F",
      type: "CDI",
      location: "Fès",
      description: "Nous cherchons un commercial pour notre salle de sport à Fès, avec des compétences en gestion de la clientèle et vente.",
    },
    {
      title: "Coach Fitness - Salle de Sport H/F",
      type: "CDI",
      location: "Marrakech",
      description: "Devenez coach fitness dans notre salle à Marrakech et accompagnez nos clients dans leur parcours de remise en forme.",
    }
  ];

  useEffect(() => {
    setFilteredOffers(jobOffers);
  }, []);

  const handleFileChange = (event) => {
    setCv(event.target.files[0]);
  };

  const handleSubmit = async (event, offerTitle) => {
    event.preventDefault();

    if (!cv) {
      alert("Veuillez sélectionner un fichier.");
      return;
    }

    const formData = new FormData();
    formData.append("cv", cv);
    formData.append("offer", offerTitle);  // Ajout du titre de l'offre au formulaire

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert(`CV envoyé pour l'offre ${offerTitle} avec succès !`);
      } else {
        alert("Échec du téléchargement.");
      }
    } catch (error) {
      console.error("Erreur lors du téléchargement :", error);
      alert("Erreur lors du téléchargement.");
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    const filtered = jobOffers.filter((offer) =>
      offer.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
      offer.description.toLowerCase().includes(event.target.value.toLowerCase()) ||
      offer.location.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredOffers(filtered);
  };

  return (
    <div className="recrutement-page">
      {/* Section 1 : Introduction */}
      <div className="recrutement-container">
        <div className="content">
          <h1 className="title">LA PASSION COMME MOTEUR !</h1>
          <p className="description">
            « Se dépasser, Se surpasser » au quotidien pour atteindre les objectifs de nos adhérents, de nos collaborateurs et de notre groupe.
          </p>
          <button
            className="btn-offres"
            onClick={() => document.getElementById('job-offers').scrollIntoView({ behavior: 'smooth' })}
          >
            Découvrir nos offres d'emploi
          </button>
        </div>
      </div>

      {/* Section 3 : Offres disponibles */}
      <div className="job-page" id="job-offers">
        <header className="job-header">
          <h1>CHEZ CASA FIT EN CE MOMENT</h1>
          <p><span>{filteredOffers.length} offres disponibles</span></p>
        </header>

        {/* Barre de recherche */}
        <div className="job-search">
          <input
            type="text"
            placeholder="Saisir votre choix de ville"
            className="search-input"
            value={search}
            onChange={handleSearchChange}
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Dernières Offres */}
        <section className="job-offers">
          <h2>Nos Dernières Offres</h2>
          <div className="offers-container">
            {filteredOffers.length > 0 ? (
              filteredOffers.map((offer, index) => (
                <div className="offer-card" key={index}>
                  <h3>{offer.title}</h3>
                  <span className="offer-type">{offer.type}</span><br />
                  <span className="offer-location">{offer.location}</span>
                  <p className="offer-description">{offer.description}</p><br />

                  {/* Formulaire de téléchargement de CV pour chaque offre */}
                  <form onSubmit={(event) => handleSubmit(event, offer.title)} className="cv-form">
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      className="file-input"
                      required
                      onChange={handleFileChange}
                    />
                    <button type="submit" className="btn-upload">Déposer votre CV</button>
                  </form>
                </div>
              ))
            ) : (
              <p>Aucune offre ne correspond à votre recherche.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Recrutement;

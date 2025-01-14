import React, { useState } from "react";
import "./ProposerLocal.css";

const ProposerLocal = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement immédiat de la page
    setSuccessMessage(true); // Affiche le message de succès

   
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  return (
    <div>
      {/* Bannière */}
      <div className="banner">
        <h2 className="banner-text">PROPOSER UN LOCAL</h2>
      </div>

      {/* Formulaire */}
      <div className="container">
        <h1 className="title">VOUS SOUHAITEZ PROPOSER VOS LOCAUX ?</h1>
        <p className="subtitle">
          Nous recherchons des locaux à partir de 1000m², sur des zones à fort flux, avec parking ou à proximité des transports en commun.
        </p>
        <form className="form" onSubmit={handleSubmit}>
          {/* Nom */}
          <div className="form-group">
            <label>
              Nom <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Votre nom" required />
          </div>

          {/* Prénom */}
          <div className="form-group">
            <label>
              Prénom <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Votre prénom" required />
          </div>

          {/* Adresse e-mail */}
          <div className="form-group">
            <label>
              Adresse e-mail <span className="required">(obligatoire)</span>
            </label>
            <input type="email" placeholder="Votre adresse e-mail" required />
          </div>

          {/* Téléphone */}
          <div className="form-group">
            <label>Téléphone</label>
            <input type="tel" placeholder="Votre numéro de téléphone" />
          </div>

          {/* Adresse postale */}
          <div className="form-group">
            <label>
              Adresse postale <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Votre adresse postale" required />
          </div>

          {/* Ville */}
          <div className="form-group">
            <label>
              Ville <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Votre ville" required />
          </div>

          {/* Code postal */}
          <div className="form-group">
            <label>
              Code postal <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Votre code postal" required />
          </div>

          {/* Situation du local */}
          <div className="form-group">
            <label>
              Situation du local <span className="required">(obligatoire)</span>
            </label>
            <select required>
              <option value="">Sélectionnez une option</option>
              <option value="vente">Vente</option>
              <option value="location">Location</option>
            </select>
          </div>

          {/* Adresse du local */}
          <div className="form-group">
            <label>
              Adresse du local <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Adresse du local" required />
          </div>

          {/* Surface */}
          <div className="form-group">
            <label>
              Surface du local en m² <span className="required">(obligatoire)</span>
            </label>
            <input type="number" placeholder="Surface en m²" required />
          </div>

          {/* Prix de vente */}
          <div className="form-group">
            <label>Prix de vente</label>
            <input type="number" placeholder="Prix de vente" />
          </div>

          {/* Loyer annuel */}
          <div className="form-group">
            <label>Loyer annuel H.T</label>
            <input type="number" placeholder="Loyer annuel H.T" />
          </div>

          {/* Descriptif du local */}
          <div className="form-group">
            <label>
              Descriptif du local <span className="required">(obligatoire)</span>
            </label>
            <textarea placeholder="Décrivez votre local ici" rows="4" required></textarea>
          </div>

          {/* Ajouter des photos */}
          <div className="form-group">
            <label>
              Ajouter des photos <span className="required">(obligatoire)</span>
            </label>
            <input type="file" accept="image/*" multiple required />
            <small>Formats acceptés : JPG, PNG</small>
          </div>

          {/* Ajouter une vidéo */}
          <div className="form-group">
            <label>Ajouter une vidéo</label>
            <input type="file" accept="video/*" />
            <small>Formats acceptés : MP4, AVI, MOV</small>
          </div>

          {/* Bouton Envoyer */}
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>

        {/* Message de succès */}
        {successMessage && (
          <p className="message">
            Merci ! Votre proposition a été envoyée avec succès. La page va se rafraîchir dans un instant.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProposerLocal;
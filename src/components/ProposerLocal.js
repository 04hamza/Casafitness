import React from "react";
import "./ProposerLocal.css";

const ProposerLocal = () => {
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
        <form className="form">
          <div className="form-group">
            <label>
              Nom <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Votre nom" required />
          </div>
          <div className="form-group">
            <label>
              Prénom <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Votre prénom" required />
          </div>
          <div className="form-group">
            <label>
              Adresse e-mail <span className="required">(obligatoire)</span>
            </label>
            <input type="email" placeholder="Votre adresse e-mail" required />
          </div>
          <div className="form-group">
            <label>Téléphone</label>
            <input type="tel" placeholder="Votre numéro de téléphone" />
          </div>
          <div className="form-group">
            <label>
              Adresse postale <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Votre adresse postale" required />
          </div>
          <div className="form-group">
            <label>
              Ville <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Votre ville" required />
          </div>
          <div className="form-group">
            <label>
              Code postal <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Votre code postal" required />
          </div>
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
          <div className="form-group">
            <label>
              Adresse du local <span className="required">(obligatoire)</span>
            </label>
            <input type="text" placeholder="Adresse du local" required />
          </div>
          <div className="form-group">
            <label>
              Surface du local en m² <span className="required">(obligatoire)</span>
            </label>
            <input type="number" placeholder="Surface en m²" required />
          </div>
          <div className="form-group">
            <label>Prix de vente</label>
            <input type="number" placeholder="Prix de vente" />
          </div>
          <div className="form-group">
            <label>Loyer annuel H.T</label>
            <input type="number" placeholder="Loyer annuel H.T" />
          </div>
          <div className="form-group">
            <label>
              Descriptif du local <span className="required">(obligatoire)</span>
            </label>
            <textarea placeholder="Décrivez votre local ici" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
      </div>
    </div>
  );
};
<footer className="footer">
  <div className="footer-content">
    <a href="/">Accueil</a>
    <a href="/proposer">Proposer un local</a>
    <a href="/ouverture">Intéressé par l'ouverture d'un club ?</a>
  </div>

  <div className="language-selector">
    <label htmlFor="language">Langue :</label>
    <select id="language" name="language">
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  </div>

  <p>&copy; 2025 FITNESS PARK. Tous droits réservés.</p>
</footer>

export default ProposerLocal;

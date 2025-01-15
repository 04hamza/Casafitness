import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Newsletter from '../Newsletter/Newsletter';
import './Concept.css';

export default function Concept() {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Quelles sont les activités proposées dans les clubs Fitness Park ?",
      answer: "Les clubs Fitness Park proposent une variété d'activités, comme la musculation, le cardio-training, des cours collectifs, du cross-training, et bien plus encore.",
    },
    {
      question: "Quelles sont les offres proposées dans les salles de sport Fitness Park ?",
      answer: "Les offres incluent des abonnements flexibles, des options premium avec accès étendu et parfois des promotions saisonnières.",
    },
    {
      question: "Est-il possible d’accéder à l'ensemble des salles Fitness Park de France ?",
      answer: "Oui, certains abonnements permettent un accès illimité à toutes les salles Fitness Park en France.",
    },
    {
      question: "Quels documents faut-il pour s'inscrire dans une salle de sport Fitness Park ?",
      answer: "Pour s'inscrire, vous aurez besoin d'une pièce d'identité, d'un RIB pour les prélèvements, et parfois d'un certificat médical.",
    },
  ];

  return (
    <>
      <div className='concept-container'>
        <div className='hero-section'>
          <img src='Images/cross-training.jpg' className='hero-img' alt='ACTIVITÉS' />
          <div className='hero-text'>
            <span>Musculation, Cardio, Cross-Training & Boxe en Accès Illimité</span>
          </div>
          <div className='gym-background'>SALLE DE SPORT HAUT DE GAMME</div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className='text-container'>
          <h1 className='concept-heading'>Des espaces uniques</h1>
          <h2 className='concept-description'>
            Avec Fitness Park, améliore ta condition physique, tonifie ton corps et développe ta masse musculaire. 
            Grâce à des espaces adaptés sur plus de 1000m², façonne tes entraînements à la perfection :
          </h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 1, translateX: "-100%" }} 
          whileInView={{ opacity: 1, scale: 1, translateX: 0 }} 
          transition={{ duration: 3 }} 
          className='activity-section'>
          <h1 className='section-title'>L’espace cardio training</h1>
          <p className='activity-description'>
            Appareils connectés dernière génération (tapis de course, rameur, vélos elliptiques, etc.). Parfait pour te remettre en forme, la perte de poids rapide et tonifier tes abdos.
          </p>
          <img src='https://www.usain-bold.com/wp-content/uploads/2024/12/les-differents-types-de-cardio.jpg' className='activity-img' alt='Cardio' />
        </motion.div>

        <motion.div 
          initial={{ opacity: 1, scale: 1, translateX: "100%" }} 
          whileInView={{ opacity: 1, scale: 1, translateX: 0 }} 
          transition={{ duration: 3 }} 
          className='activity-section'>
          <h1 className='section-title'>L’espace cross-training</h1>
          <p className='activity-description'>
            Pour tes entraînements les plus intensifs, afin de brûler des calories en un temps record ou pour une préparation physique complète.
          </p>
          <img src='https://www.cerclesdelaforme.com/wp-content/uploads/mini-banniere-stage-boxe-crosstraining-11mai19.jpg' className='activity-img' alt='Cross-Training' />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, translateY: "200%" }} 
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }} 
          transition={{ duration: 3 }} 
          className='signup-button'>
          <button className='signup-btn'>
            <Link to="/signup" className='signup-link'>S'INSCRIRE</Link>
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, translateY: "100%" }} 
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }} 
          transition={{ duration: 2 }} 
          className='activities-header'>
          <h1 className='activities-title'>DÉCOUVRE NOS ACTIVITÉS</h1>
          <h2 className='activity-subtitle'>CHOISIS TA DISCIPLINE</h2>
        </motion.div>


        {/* Autres sections inchangées */}

        <div className="faq-container">
          <div className="gym-img-container">
            <img
              src="https://c8.alamy.com/compfr/fc748k/culturisme-fc748k.jpg"
              className="gym-img"
              alt="Gym"
            />
          </div>
          <h2>Questions & Réponses</h2>
          <ul>
            {faqData.map((faq, index) => (
              <li key={index}>
                <strong onClick={() => toggleQuestion(index)} style={{ cursor: 'pointer' }}>
                  {faq.question}
                </strong>
                {openQuestions.includes(index) && <p>{faq.answer}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div className='video-section'>
          <h2>Regarde notre vidéo de présentation</h2>
          <iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/NhImfyR17Fo"
  title="Fitness Park Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen>
</iframe>

        </div>
        <motion.div
          initial={{ opacity: 0, translateX: "100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 3 }}
          className='newsletter-section'>
          <Newsletter />
        </motion.div>


      </div>
    </>
  );
}


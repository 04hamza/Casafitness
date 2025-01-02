import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GymPlans.css';

function GymPlans() {
  const plans = [
    {
      title: 'Classic',
      price: '19€',
      details: ['Unlimited access', 'Video courses', 'Home Training'],
    },
    {
      title: 'Access+',
      price: '29€',
      details: ['Toning Platform', 'Water Fountain', 'Body Analysis'],
    },
    {
      title: 'Ultimate',
      price: '39€',
      details: ['Train with a guest', 'Online coach', '-10% on club store'],
    },
  ];
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    // Navigate to the Sign Up page
    navigate('/signup');
  };

  return (
    <div className="subscriptions">
      {plans.map((plan, index) => (
        <div className="subscription-card" key={index}>
          <h2>{plan.title}</h2>
          <p>{plan.price} for the first 4 weeks</p>
          <ul>
            {plan.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
          <button className="choose-button" onClick={handleSignUpClick}>Choose This Plan</button>
        </div>
      ))}
    </div>
  );
}

export default GymPlans;

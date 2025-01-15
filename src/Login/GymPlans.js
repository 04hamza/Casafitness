import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GymPlans.css';

function GymPlans() {
  const plans = [
    {
      title: 'basic',
      price: '190 MAD',
      details: ['Unlimited access', 'Video courses', 'Home Training'],
    },
    {
      title: 'premium',
      price: '290 MAD',
      details: ['Toning Platform', 'Water Fountain', 'Body Analysis'],
    },
    {
      title: 'vip',
      price: '390 MAD',
      details: ['Train with a guest', 'Online coach', '-10% on club store'],
    },
  ];
  const navigate = useNavigate();
  const handleSignUpClick = (e,title) => {
    navigate(`/signup/${title}`);
  };
  return (
    <div className="subscriptions">
      {plans.map((plan, index) => (
        <div className="subscription-card" key={index}>
          <h2>{plan.title}</h2>
          <p className='price-title'>{plan.price}</p><p className='discripe-title'>for the first 4 weeks</p>
          <ul>
            {plan.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
          <button className="choose-button" onClick={(e)=>handleSignUpClick(e,plan.title)}>Choose This Plan</button>
        </div>
      ))}
    </div>
  );
}

export default GymPlans;

import React from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './ClubDetails.css';
import Activities from '../Activities/Activities';

function ClubDetails() {
  const { name } = useParams();

  
  const gyms = [
    { email: 'casafit@gmail.com', name: 'Casafit - Casablanca', address: 'Boulevard Anfa, Casablanca', phone: '05 50 69 75 45', hours: '07:00 - 23:00', location: { lat: 33.5883, lng: -7.6114 } },
    { email: 'casafit@gmail.com', name: 'Casafit - Marrakech', address: 'Avenue Mohammed VI, Marrakech', phone: '05 70 39 46 12', hours: '07:00 - 23:00', location: { lat: 31.6295, lng: -7.9811 } },
    { email: 'casafit@gmail.com', name: 'Casafit - Tangier', address: 'Avenue Hassan II, Tangier', phone: '05 70 39 46 12', hours: '07:00 - 23:00', location: { lat: 35.7595, lng: -5.83395 } },
    { email: 'casafit@gmail.com', name: 'Casafit - Fes', address: 'Avenue des Forces Armées Royales, Fes', phone: '05 35 94 72 56', hours: '07:00 - 23:00', location: { lat: 34.0331, lng: -5.0003 } },
    { email: 'casafit@gmail.com', name: 'Casafit - Rabat', address: 'Avenue Mohammed V, Rabat', phone: '05 37 87 94 32', hours: '07:00 - 23:00', location: { lat: 34.020882, lng: -6.84165 } },
    { email: 'casafit@gmail.com', name: 'Casafit - Agadir', address: 'Avenue Hassan II, Agadir', phone: '05 28 84 25 30', hours: '07:00 - 23:00', location: { lat: 30.4278, lng: -9.5985 } },
    { email: 'casafit@gmail.com', name: 'Casafit - Oujda', address: 'Avenue Moulay Ismail, Oujda', phone: '05 36 70 22 22', hours: '07:00 - 23:00', location: { lat: 34.6863, lng: -1.9107 } },
    { email: 'casafit@gmail.com', name: 'Casafit - Nador', address: 'Avenue Mohamed V, Nador', phone: '05 36 70 45 12', hours: '07:00 - 23:00', location: { lat: 35.1741, lng: -2.9336 } },
    { email: 'casafit@gmail.com', name: 'Casafit - Meknes', address: 'Avenue Hassan II, Meknes', phone: '05 35 56 78 90', hours: '07:00 - 23:00', location: { lat: 33.8977, lng: -5.5470 } },
    { email: 'casafit@gmail.com', name: 'Casafit - Mohammedia', address: 'Avenue Al Amal, Mohammedia', phone: '05 23 31 22 11', hours: '07:00 - 23:00', location: { lat: 33.6802, lng: -7.3848 } },
    { email: 'casafit@gmail.com', name: 'Casafit - Kenitra', address: 'Avenue Mohamed VI, Kenitra', phone: '05 37 84 62 30', hours: '07:00 - 23:00', location: { lat: 34.2674, lng: -6.5775 } },
    { email: 'casafit@gmail.com', name: 'Casafit - El Jadida', address: 'Avenue Mohammed V, El Jadida', phone: '05 23 34 85 90', hours: '07:00 - 23:00', location: { lat: 33.2563, lng: -8.5084 } }
  ];

  
  const decodedName = decodeURIComponent(name);

 
  const gym = gyms.find((gym) => gym.name === decodedName);

  
  if (!gym) {
    return <div>Gym not found.</div>;
  }

  return (
    <>
    <div className="club-details-container">
      <div className="overlay">
        <h1>{gym.name}</h1>
        <p><FaClock className="icon" /> <strong>Hours :</strong> {gym.hours}</p>
        <p><FaPhoneAlt className="icon" /> <strong>Phone :</strong> {gym.phone}</p>
        <p><FaEnvelope className="icon" /> <strong>Email :</strong> {gym.email}</p>
        <p><FaMapMarkerAlt className="icon" /> <strong>Address :</strong> {gym.address}</p>

      </div>
    </div>
    <div>
        <Activities />
    </div>
    </>
  );
}

export default ClubDetails;
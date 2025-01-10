import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { FaClock, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './GymSelection.css';

function GymSelection() {
  const gyms = [
    { name: 'Casafit - Casablanca', address: 'Boulevard Anfa, Casablanca', phone: '05 50 69 75 45', hours: '07:00 - 23:00', location: { lat: 33.5883, lng: -7.6114 } },
    { name: 'Casafit - Marrakech', address: 'Avenue Mohammed VI, Marrakech', phone: '05 70 39 46 12', hours: '07:00 - 23:00', location: { lat: 31.6295, lng: -7.9811 } },
    { name: 'Casafit - Tangier', address: 'Avenue Hassan II, Tangier', phone: '05 70 39 46 12', hours: '07:00 - 23:00', location: { lat: 35.7595, lng: -5.83395 } },
    { name: 'Casafit - Fes', address: 'Avenue des Forces Armées Royales, Fes', phone: '05 35 94 72 56', hours: '07:00 - 23:00', location: { lat: 34.0331, lng: -5.0003 } },
    { name: 'Casafit - Rabat', address: 'Avenue Mohammed V, Rabat', phone: '05 37 87 94 32', hours: '07:00 - 23:00', location: { lat: 34.020882, lng: -6.84165 } },
    { name: 'Casafit - Agadir', address: 'Avenue Hassan II, Agadir', phone: '05 28 84 25 30', hours: '07:00 - 23:00', location: { lat: 30.4278, lng: -9.5985 } },
    { name: 'Casafit - Oujda', address: 'Avenue Moulay Ismail, Oujda', phone: '05 36 70 22 22', hours: '07:00 - 23:00', location: { lat: 34.6863, lng: -1.9107 } },
    { name: 'Casafit - Nador', address: 'Avenue Mohamed V, Nador', phone: '05 36 70 45 12', hours: '07:00 - 23:00', location: { lat: 35.1741, lng: -2.9336 } },
    { name: 'Casafit - Meknes', address: 'Avenue Hassan II, Meknes', phone: '05 35 56 78 90', hours: '07:00 - 23:00', location: { lat: 33.8977, lng: -5.5470 } },
    { name: 'Casafit - Mohammedia', address: 'Avenue Al Amal, Mohammedia', phone: '05 23 31 22 11', hours: '07:00 - 23:00', location: { lat: 33.6802, lng: -7.3848 } },
    { name: 'Casafit - Kenitra', address: 'Avenue Mohamed VI, Kenitra', phone: '05 37 84 62 30', hours: '07:00 - 23:00', location: { lat: 34.2674, lng: -6.5775 } },
    { name: 'Casafit - El Jadida', address: 'Avenue Mohammed V, El Jadida', phone: '05 23 34 85 90', hours: '07:00 - 23:00', location: { lat: 33.2563, lng: -8.5084 } }
  ];
  

  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB58mrpr66ouiJrTt4_0RagJhiwCloju4k', 
  });

  const filteredGyms = gyms.filter(gym =>
    gym.name.toLowerCase().includes(search.toLowerCase()) ||
    gym.address.toLowerCase().includes(search.toLowerCase())
  );

  const handleSignUpClick = () => {
    navigate('/gymplans');
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="gym-selection-container">
      <h1>Choose Your Gym</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search gyms by city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="gym-content">
        <div className="gym-cards">
          {filteredGyms.map((gym, index) => (
            <div key={index} className="gym-card">
              <h2>{gym.name}</h2>
              <p><FaClock className="icon" /> <strong>Hours: </strong> {gym.hours}</p>
              <p><FaPhoneAlt className="icon" /> <strong>Phone: </strong> {gym.phone}</p>
              <p><FaMapMarkerAlt className="icon" /> <strong>Address: </strong> {gym.address}</p>
              <button className="subscribe-button" onClick={handleSignUpClick}>Sign Up</button>
              <button className="subscribe-button" onClick={() => navigate(`/clubdetails/${encodeURIComponent(gym.name)}`)}>Show The Clib</button>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '500px' }}
            zoom={6}
            center={{ lat: 31.7917, lng: -7.0926 }} 
          >
            {filteredGyms.map((gym, index) => (
              <Marker key={index} position={gym.location} label={gym.name} />
            ))}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}

export default GymSelection;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import './GymSelection.css';

function GymSelection() {
  const gyms = [
    { name: 'Casafit - Casablanca', address: 'Boulevard Anfa, Casablanca', phone: '05 50 69 75 45', hours: '07:00 - 23:00', location: { lat: 33.5883, lng: -7.6114 } },
    { name: 'Casafit - Marrakech', address: 'Avenue Mohammed VI, Marrakech', phone: '05 70 39 46 12', hours: '07:00 - 23:00', location: { lat: 31.6295, lng: -7.9811 } },
    { name: 'Casafit - Tangier', address: 'Avenue Hassan II, Tangier', phone: '05 70 39 46 12', hours: '07:00 - 23:00', location: { lat: 35.7595, lng: -5.83395 } },
    { name: 'Casafit - Fes', address: 'Avenue des Forces Armées Royales, Fes', phone: '05 35 94 72 56', hours: '07:00 - 23:00', location: { lat: 34.0331, lng: -5.0003 } },
    { name: 'Casafit - Rabat', address: 'Avenue Mohammed V, Rabat', phone: '05 37 87 94 32', hours: '07:00 - 23:00', location: { lat: 34.020882, lng: -6.84165 } },
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
              <p>
                <strong>Hours:</strong> {gym.hours}<br />
                <strong>Phone:</strong> {gym.phone}<br />
                <strong>Address:</strong> {gym.address}
              </p>
              <button className="subscribe-button" onClick={handleSignUpClick}>Sign Up</button>
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
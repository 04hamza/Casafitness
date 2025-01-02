import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUpForm() {
  const [formData, setFormData] = useState({
    civilite: '',
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="signup-container">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <label>Civility</label>
          <select name="civilite" onChange={handleChange} required>
            <option className='options' value="">Select</option>
            <option className='options' value="Mr">Mr</option>
            <option className='options' value="Mrs">Mrs</option>
          </select>
        </div>
        <div className="input-group">
          <label>First Name</label>
          <input type="text" name="prenom" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input type="text" name="nom" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Address</label>
          <input type="text" name="adresse" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;

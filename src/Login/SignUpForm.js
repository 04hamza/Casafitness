import React, {useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

function SignUpForm() {
  const {membership_type}=useParams()
  const [errors, setErrors] = useState({
    name:"",
    prenom:"",
    email:"",
    phone:"",
    password:"",
  });
  const [formData, setFormData] = useState({
    name:"",
    prenom:"",
    email:"",
    phone:"",
    password:"",
    password_confirmation:"",
    role: "member", 
    membership_type :membership_type
   });
  console.log("membership_type :"+ membership_type)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post("http://127.0.0.1:8000/api/add_user", formData)
      .then((response) => {
        if (response.status === 201) {
          alert("User registered successfully!");
        }
      })
      .catch((error) => {
        if (error.response) {
          const newErrors = { ...errors };
          console.log("Error response:", error.response);
  
          if (error.response.data && error.response.data.errors) {
            Object.keys(error.response.data.errors).forEach((field) => {
              newErrors[field] = error.response.data.errors[field][0];
            });
          } else {
            newErrors.general = "There was an error with your submission. Please try again.";
          }
          setErrors(newErrors);
        } else {
          setErrors({ general: "Server is not reachable." });
        }
      });
  };

  return (
    <div className="signup-container">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <label>First Name</label>
          <input type="text" name="prenom" onChange={handleChange} required />
          {errors.prenom && <div className="error-message">{errors.prenom}</div>}
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input type="text" name="name" onChange={handleChange} required />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input type="number" name="phone" onChange={handleChange} required />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input type="password" name="password_confirmation" onChange={handleChange} required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUpForm;

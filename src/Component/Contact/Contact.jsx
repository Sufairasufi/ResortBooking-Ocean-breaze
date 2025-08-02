import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", address: "" }); 
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>

        <div className="form-group">
          <label>Name:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

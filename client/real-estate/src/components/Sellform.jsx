import React from 'react';
import { useState , useEffect } from 'react';
import './Styles/Sell.css'; // Assuming you have a CSS file for styling
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sellform = ({fetchproperty,selectedproperty,setSelectedproperty}) => {
  const [form, setForm] = useState({
    owner: "",
    title: "",
    location: "",
    price: "",
    contact: "",
    superarea: "",
    transaction: "",
    furnishing: "",
    bathroom: "",
    image: ""
  });
  useEffect(()=>{
        if(selectedproperty) 
          setForm(selectedproperty);
    },[selectedproperty]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanedForm = {
    ...form,
    price: Number(form.price) || 0,
    contact: String(form.contact).trim(),
    superarea: Number(form.superarea) || 0,
    bathroom: Number(form.bathroom) || 0,
  };

  console.log("📤 Submitting cleaned form:", cleanedForm);
    try {
    if (selectedproperty) {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/properties/${selectedproperty._id}`, form);
      alert("Property updated successfully!");
      setSelectedproperty(null);
    } else {

      console.log("FORM BEFORE SUBMIT:", form);
      await axios.post(`${import.meta.env.VITE_API_URL}/api/properties`, form);
      alert("Property added successfully!");
    }
    setForm({ 
      owner: "",
      title: "",
      location: "",
      price: "",
      contact: "",
      superarea: "",
      transaction: "",
      furnishing: "",
      bathroom: "",
      image: "" 
    });
    fetchproperty();
  } catch (error) {
    console.error("Submission failed:", error);
    alert(`Submission failed: ${error.response ? error.response.data.message : error.message}`);
  }
  };

  return <>
     <div className="form-container">
      <h2>🏡 Sell Your Property</h2>
      <form onSubmit={handleSubmit} className="property-form">
      <div className="form-group full-width">
          <label htmlFor="owner">Your Name</label>
          <input
            type="text"
            name="owner"
            value={form.owner}
            onChange={handleChange}
            placeholder="Your Name" required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g., 2BHK Apartment in NYC" required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="City, State" required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="e.g., 250000"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact No.</label>
          <input
            type="tel"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="e.g., 250000"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="superarea">Super Area (Square ft.)</label>
          <input
            type="number"
            name="superarea"
            value={form.superarea}
            onChange={handleChange}
            placeholder="Total Arae..."
            required
          />
        </div>
        <div className="form-group ">
          <label htmlFor="transaction">Transaction</label>
          <input
            type="text"
            name="transaction"
            value={form.transaction}
            onChange={handleChange}
            placeholder="Write something about the property..."

          />
        </div>
        <div className="form-group ">
          <label htmlFor="furnishing">Furnishing</label>
          <input
            type="text"
            name="furnishing"
            value={form.furnishing}
            onChange={handleChange}
            placeholder="Write something about the property..."

          />
        </div>
        <div className="form-group ">
          <label htmlFor="bathroom">Bathroom</label>
          <input
            type="text"
            name="bathroom"
            value={form.bathroom}
            onChange={handleChange}
            placeholder="Write something about the property..."

          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button type="submit" className="submit-button">{selectedproperty ? "Update":"Add"} 
          Submit Property
        </button>
      </form>

      <div className="view-link">
        <Link to="/view">View Other Listings</Link>
      </div>
    </div>
    </>
};

export default Sellform;

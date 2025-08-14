import React from 'react';
import listings from '../data/properties.js';
 // Assuming you have a listings data file
 import './Styles/Propertycard.css';
const PropertyCard = ({ listing }) => {
  return (
    <div className="property-card">
      {/* Left: Image Section */}
      <div className="property-image-container">
        <img src={listing.imageUrl} alt="property" className="property-image" />
        <span className="image-tag">{listing.imageCount}+ Photos</span>
        <span className="posted-tag">Posted: {listing.posted}</span>
      </div>

      {/* Middle: Details */}
      <div className="property-details">
        <h3 className="property-title">{listing.title}</h3>
        <div className="property-info">
          <div><strong>SUPER AREA</strong><br />{listing.area}</div>
          <div><strong>TRANSACTION</strong><br />Resale</div>
          <div><strong>FURNISHING</strong><br />{listing.furnishing}</div>
          <div><strong>BATHROOM</strong><br />{listing.bathroom}</div>
        </div>
        <p className="owner-name">Owner: {listing.owner}</p>
      </div>

      {/* Right: Price & Buttons */}
      <div className="property-price-actions">
        <div className="price">₹{listing.price / 100000} Lac</div>
        <div className="price-per-sqft">₹{listing.pricePerSqft} per sqft</div>
        <button className="contact-btn">Contact Owner</button>
        <button className="phone-btn">Get Phone No.</button>
      </div>
    </div>
  );
};

export default PropertyCard;

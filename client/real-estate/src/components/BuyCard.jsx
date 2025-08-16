import React from 'react';
import axios from 'axios';
import './Styles/Propertycard.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BuyCard = ({properties , fetchproperties,setSelectedproperties}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const [amount, setAmount] = useState(100);
  const navigate = useNavigate();


  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedContact(null);
  };
  
  const handlePayment = async () => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/payments/create-order`, { amount });
            const { orderId, currency } = data;

            const options = {
                key: 'your_razorpay_key_id', // from .env
                amount: amount * 100,
                currency,
                name: "REAL ESTATE CRUD",
                description: "Service Payment",
                order_id: orderId,
                handler: async function (response) {
                    await axios.post(`${import.meta.env.VITE_API_URL}/api/payments/save-payment`, {   // localhost api URL will be replaced with backend 
                        orderId,
                        paymentId: response.razorpay_payment_id,
                        amount,
                        currency,
                        status: 'success'
                    });
                    alert("Payment Successful!");
                    navigate('/dashboard'); // Redirect to dashboard after payment
                },
                prefill: {
                    name: "User",
                    email: "user@example.com",
                    contact: "9999999999"
                },
                theme: { color: "#3399cc" }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Payment Error", error);
        }
    };

  return <>

  {showModal && (
    <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999
  }}>
    <div style={{
      backgroundImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(255, 123, 0, 0.8)), to(rgba(255, 251, 0, 0.8)))",
      padding: "20px 30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 2)",
      minWidth: "280px",
      textAlign: "center"
    }}>
      <h3 style={{
        marginBottom: "15px",
        fontSize: "20px",
        color: "black",
        fontWeight: "bold"
      }}>Contact Number</h3>
      <p style={{
        fontSize: "16px",
        marginBottom: "20px",
        color: "black"
      }}>{selectedContact || 'No contact data'}</p>
      <button
        onClick={closeModal}
        style={{
          padding: "8px 16px",
          backgroundColor: "#ff0000",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px"
        }}
      >
        Close
      </button>
    </div>
  </div>
  )}
  <div className="">
      {properties.map((x) => (
    <div className="property-card" key={x._id}>
      <div className="property-details">
        <h5 className="property-title">{x.title}</h5>
        <div className="property-info">
          <p><strong>SUPER AREA</strong><br /> {x.superarea || '—'} sqft</p>
          <p><strong>TRANSACTION</strong><br /> {x.transaction || 'Resale'}</p>
          <p><strong>FURNISHING</strong> <br /> {x.furnishing || 'Unfurnished'}</p>
          <p><strong>BATHROOM</strong><br /> {x.bathroom || '—'}</p>
        </div>
        <p><strong>OWNER</strong><br /> {x.owner || '—'}</p>
        <p><strong>CONTACT NO.</strong><br /> {x.contact || '—'}</p>
      </div>
      <div className="property-price-actions">
        <div className="price">₹{x.price/1000} Lac</div>

        <button className='contact-btn' onClick={() => handleContactClick(x.contact)}>Contact Owner</button>
        <button className='phone-btn' onClick={handlePayment}>Book</button>
      </div>
    </div>
  ))}
</div>
  <div className="empty-state">
    {properties.length === 0 && <p>No properties available. Please add a property.</p>}   
  </div>
  
  </>
}

export default BuyCard

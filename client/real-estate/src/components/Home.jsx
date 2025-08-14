import React from 'react';
import {Link} from 'react-router-dom';
import '../components/Styles/Home.css';
import Button from 'react-bootstrap/Button';

import BuyCard from './BuyCard.jsx';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const Home = () => {
  const [properties, setProperties] = React.useState([]);
  const [selectedproperty, setSelectedproperty] = React.useState(null);
  const [searchTerm,setSearchTerm] = useState('');

  const fetchproperties = async () => {
    const response = await axios.get('http://localhost:6005/api/properties');
    setProperties(response.data);
  };
  const searchproperties = async ()=>{
    if(searchTerm.trim() === ''){
      fetchproperties();
    }
    else {
      const response = await axios.get(`http://localhost:6005/api/properties/search?title=${searchTerm}`);
      setProperties(response.data);
    }
  }
  useEffect(() => {
    fetchproperties();
  }, []);
  return <>
    <section className="hero">
    <h2>Explore your Dream Home Today in India</h2>
    <div className="btn-group">
    <Link to="/buy"><Button className="active">Buy</Button></Link>
    <Link to="/sell"><Button className="sell">Sell</Button></Link>
    </div>
    <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              maxWidth: '500px',
              margin: '50px auto 20px auto',
              background: '#f9f9f9',
              padding: '8px 12px',
              borderRadius: '50px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                padding: '10px 15px',
                border: 'none',
                outline: 'none',
                fontSize: '16px',
                background: 'transparent'
              }}
            />
            <button
              onClick={searchproperties}
              style={{
                background: '#4F46E5',
                color: '#fff',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => (e.target.style.background = '#3730A3')}
              onMouseOut={(e) => (e.target.style.background = '#4F46E5')}
            >
              Search
            </button>
            <button
              onClick={fetchproperties}
              style={{
                background: '#E5E7EB',
                color: '#374151',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => (e.target.style.background = '#D1D5DB')}
              onMouseOut={(e) => (e.target.style.background = '#E5E7EB')}
            >
              Reset
            </button>
          </div>
  </section>

  <section className="cities">
    <h2>Find your property in your preferred city</h2>
    <div className="city-grid">
      <div className="city-box">kolkata<br/>100+ Properties</div>
      <div className="city-box">Barrakpur<br/>80+ Properties</div>
      <div className="city-box">Saltlake<br/>150+ Properties</div>
      <div className="city-box">Dumdum<br/>60+ Properties</div>
      <div className="city-box">Madyamgram<br/>120+ Properties</div>
    </div>
    <button className="view-more">View More Cities</button>
  </section>

  <section className="latest-properties">
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className='text-3xl font-semibold text-gray-800 text-center mb-6 mt-10' style={{ fontSize:'3.5rem',marginTop: '20px', marginLeft: '20px',marginBottom:'30px' }}>Flats for Sale</h1>
      {/* Listings */}
      <div className="buycard">
        <BuyCard
    properties={properties} 
    fetchproperties={fetchproperties}
    setSelectedproperty={setSelectedproperty}
    />
      </div>
    </div>
    <div className='mx-auto d-flex justify-content-center align-items-center '><Link to='/buy'><Button className="btn btn-primary  " style={{ marginTop: '20px', marginLeft: '20px' }}> View All Listings </Button></Link></div>
  </section>

  <section className="services">
    <h2 style={{fontWeight:"bold"}}>Explore our real estate services</h2>
    <div className="service-grid">
    <div className='service-card' style={{color: "#000000"}}><Link to="/agents"><div className="img-box"><img src='https://lawsikho.com/blog/wp-content/uploads/2021/08/9-most-common-types-of-business-agents.png'></img></div></Link>Agents</div>
    <div className='service-card' style={{color: "#000000"}}><Link to="/interior"><div className="img-box"><img src='https://lawsikho.com/blog/wp-content/uploads/2021/08/9-most-common-types-of-business-agents.png'></img></div></Link>Interior Design</div>
    </div>
  </section>
  </>
}

export default Home
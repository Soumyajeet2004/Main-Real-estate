import React from 'react';
import propertyData from '../data/datas'; 
import Cardslider from './Cardslider';
import '../components/Styles/Buy.css';
import Button from 'react-bootstrap/Button';
import BuyCard from './BuyCard.jsx';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function Buy() {
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
  <section className="ss">
  <section>
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className='text-3xl font-semibold text-gray-800 text-center mb-6 mt-10' style={{ fontSize:'3.5rem',marginTop: '20px', marginLeft: '20px',marginBottom:'30px' }}>Flats for Sale</h1>
      <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              maxWidth: '500px',
              margin: '0 auto 20px auto',
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
      <BuyCard
    properties={properties} 
    fetchproperties={fetchproperties}
    selectedproperty={selectedproperty}
    setSelectedproperty={setSelectedproperty}
    />
    </div>
  </section>
  <div className='mx-auto d-flex justify-content-center align-items-center '><Button className="btn btn-primary  " style={{ marginTop: '20px', marginLeft: '20px',marginBottom:'30px' }}> View All Listings </Button></div>
  <section className="bg-gray-50 py-8">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
      Properties in Kolkata
    </h1>

    {/* Carousel */}
    <Cardslider properties={propertyData} />
  </div>
</section>
  </section>
  

  </>
}

export default Buy
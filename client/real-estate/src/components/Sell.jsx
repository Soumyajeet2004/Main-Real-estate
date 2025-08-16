import React from 'react';
import axios from 'axios';
import Sellform from './Sellform';
import Propertylist from './ViewSell';
import { useEffect } from 'react';


const Sell = () => {
  const [properties, setProperties] = React.useState([]);
  const [selectedproperty, setSelectedproperty] = React.useState(null);

  const fetchproperties = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/properties`);
    setProperties(response.data);
  };
  useEffect(() => {
    fetchproperties();
  }, []);

  return <>
  <Sellform
    fetchproperty={fetchproperties}
    selectedproperty={selectedproperty}
    setSelectedproperty={setSelectedproperty}
    />
    <Propertylist
    properties={properties}
    fetchproperties={fetchproperties}
    setSelectedproperty={setSelectedproperty}
    />

  
  </>
}

export default Sell

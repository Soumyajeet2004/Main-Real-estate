import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Propertylist from './components/ViewSell';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import Dashboard from './components/Dashboard';
import Agents from './components/Agents';
import Interior from './components/Interior'; 



import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
  return<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ='/about' element={<About />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/view-sell" element={<Propertylist />} />
          <Route path="/interior" element={<Interior />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}
export default App
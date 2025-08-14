import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import registerImage from '../assets/0x0.webp';

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const handlechange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password) {
        alert("All fields are required!");
        return;
    }
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, form);
        localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
        alert('Registration successful. Please login.');
        navigate('/login');
    } catch (err) {
        console.error('Registration error:', err);
        alert(err.response?.data?.message || 'Registration failed');
    }
    }
    return <>
    <div style={{
    minHeight: '100vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("\corinne-kutz-tMI2_-r5Nfo-unsplash.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  }}>
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center ">
      <div className="row w-100 shadow-lg rounded overflow-hidden" style={{ maxWidth: '1000px', background: 'linear-gradient(135deg, #e0eafc, #00d9ff)' }}>
        {/* Left Side - Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={registerImage}
            alt="Register Visual"
            className="img-fluid h-100 w-100"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6 p-5" style={{color:"black"}}>
          <h2 className="text-center mb-4 fw-bold" style={{color:"black"}}>Create Your Account</h2>
          <form onSubmit={handlesubmit} noValidate>
            <div className="mb-3" >
              <label className="form-label" >Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handlechange}
                placeholder="Full Name"
                required
                style={{background:"white",border:"none"}}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handlechange}
                placeholder="example@email.com"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handlechange}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary btn-lg">
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
    </div>
     
    </>
}

export default Register

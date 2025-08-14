import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import registerImage from '../assets/types-of-real-estate-overview-scaled.jpg';

const Login = () => {
    const[form,setForm] = useState({
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
        try {
            const response = await axios.post('http://localhost:6005/api/auth/login', form);
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/dashboard');
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        }
    }

  return <>
  <div
        style={{
          minHeight: '100vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://rulehomes.com/wp-content/uploads/2024/06/Regulated-Investment-Companies.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{color:"black"}}>
          <div
            className="row w-100 shadow-lg rounded overflow-hidden"
            style={{
              maxWidth: '1000px',
              background: 'linear-gradient(135deg, #e0eafc, #00d9ff)',
            }}
          >
            {/* Left Side - Image */}
            <div className="col-md-6 d-none d-md-block p-0">
              <img
                src={registerImage}
                alt="Login Visual"
                className="img-fluid h-100 w-100"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Right Side - Form */}
            <div className="col-md-6 p-5">
              <h2 className="text-center mb-4 fw-bold">Login to Your Account</h2>
              <form onSubmit={handlesubmit} noValidate>
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
                    Login
                  </button>
                </div>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <a href="/">Register here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Login ;

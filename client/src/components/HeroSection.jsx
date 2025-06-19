import React from 'react';
import './style.css';
import { FaBook } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <center>
        <FaBook className="logo" style={{fontSize:'80px'}} />
        </center>
        <h1>Bookly</h1>
        <h2 className="hero-subheading">Your Personal Library Management System</h2>
        {/* <p>Add, view, and delete books effortlessly.</p> */}
        <button
          className="hero-btn"
          onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
        >
          Scroll Down
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import { FaBook } from 'react-icons/fa';
import './style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaBook className="logo" />
        <span className="title">Bookly</span>
      </div>
    </nav>
  );
}

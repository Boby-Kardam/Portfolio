import React from "react";
import './style.css'

function Header() {
  return (
    <div>
      <header className="header" style={{ borderBottom: "0.1px solid white" }}>
        <a href="#" className="logo">Kardam</a>

        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default Header; 
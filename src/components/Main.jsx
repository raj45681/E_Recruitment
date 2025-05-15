import React, { useState, useEffect } from "react";
import "../css/main.css";
import img1 from "/assets/main.jpg";
import white from "/assets/white.png";
import { FaBars, FaTimes } from "react-icons/fa";
import boyImg from "/assets/Boy1.png";
import girlImg from "/assets/Girl2.png";

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setTimeout(() => setAnimateHero(true), 100);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" draggable="false" />
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              Client
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
          </li>
        </ul>
        <div className="contact-button">
          <a href="#contact">
            <button>Contact Us</button>
          </a>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <div className={`hero-text${animateHero ? ' hero-text-animate' : ''}`}>
            <div className="hero-text1">
              <h1>
                Connecting <span className="highlight">Top Talent</span> with
                <br />
                Leading Companies
              </h1>
              <p>
                Work Force – Today helps businesses find the perfect candidates
                <br />
                and professionals discover their dream careers.
              </p>
              <div
                className="hero-btn"
                style={{ marginTop: '1.2rem', marginLeft: '10%' }}
                onClick={() => {
                  const footer = document.getElementById("footer");
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <b>Get in Touch</b>
              </div>
            </div>
          </div>
          <div className={`hero-image${animateHero ? ' hero-image-animate' : ''}`}>
            <div className="image-wrapper">
              <img src={boyImg} alt="boy" draggable="false" className="hero-photo-shadow" />
            </div>
            <div className="image-wrapper girl-photo-below">
              <img src={girlImg} alt="girl" draggable="false" className="hero-photo-shadow" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

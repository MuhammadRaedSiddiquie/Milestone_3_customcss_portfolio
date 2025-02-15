'use client'
import React, { useState } from 'react';
import Style from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={Style.nav}>
      {/* Hamburger Icon */}
      <div className={Style.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>

      {/* Navbar Links */}
      <ul className={`${Style.navList} ${isOpen ? Style.open : ''}`}>
        <li><a href="#home" onClick={toggleMenu}><h3>HOME</h3></a></li>
        <li><a href="#about" onClick={toggleMenu}><h3>ABOUT</h3></a></li>
        <li><a href="#skills" onClick={toggleMenu}><h3>SKILLS</h3></a></li>
        <li><a href="#projects" onClick={toggleMenu}><h3>PROJECTS</h3></a></li>
        <li><a href="#contact" onClick={toggleMenu}><h3>CONTACT</h3></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
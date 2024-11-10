import React from 'react';
import Style from './navbar.module.css'


function Navbar() {
  return (
    <nav className={Style.nav}>
        <ul>
            <li><a href="#home"><h3>HOME</h3></a></li>
            <li><a href="#about"><h3>ABOUT</h3></a></li>
            <li><a href="#skills"><h3>SKILLS</h3></a></li>
            <li><a href="#projects"><h3>PROJECTS</h3></a></li>
            <li><a href="#contact"><h3>CONTACT</h3></a></li>
        </ul>
    </nav>
  )
}

export default Navbar

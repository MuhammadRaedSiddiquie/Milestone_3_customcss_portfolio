'use client'
import React from 'react'
import Image from "next/image";
import Stars from "../Stars/Stars";
import Style from './hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'




function Hero() {
  return (
    <section className={Style.section} id='home'>
      <aside className={Style.left_aside }>
        <Stars></Stars>
        {/* <div className="profile"><Image src="" layout="fill" alt=""></Image></div> */}
        <div className={Style.text_wrapper}>
          <h2 style={{fontFamily:'monument extended',fontWeight:'100'}} >Hi! I&lsquo;m</h2>
          <h1 style={{fontFamily:'monument extended'}} >MUHAMMAD RAED</h1>
          <h3>Learning Front-End Web Development passionate about creating interactive applications and
            experiences on the web.</h3>
        </div>
        <div className={Style.btn_more}>
          <button className={Style.btn_about}>
            <a href="#about"><h4 className="text-lg">More</h4></a>
          </button>
          <div className={Style.icons} >
            <span><a target="_blank" href="https://github.com/MuhammadRaedSiddiquie/">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a></span>
            <span><a target="_blank" href="https://www.linkedin.com/in/raed-siddiquie/">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a></span>
            <span><a target="_blank" href="https://x.com/raedsiddiquie">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a></span>
          </div>
        </div>

      </aside>
      <aside className={Style.right_aside}>
        <div className={Style.image_container}><Image className="z-10 mt-4" src="/Images/person.png" width={370} height={200} alt=""></Image></div>
      </aside>

    </section>
  )

}

export default Hero

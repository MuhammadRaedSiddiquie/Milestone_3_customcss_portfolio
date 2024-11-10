import React from 'react'
import Style from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'




function Footer() {
  return (
    <>
    
    <footer className={Style.footer}>
        <ul >
            <li>Projects</li>
            <li>Contact</li>
            <li>Home</li>
        </ul>
        
        <div className={Style.footericons}>
            <a target="_blank" href="https://github.com/MuhammadRaedSiddiquie/">
                <div><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    <h2>GitHub</h2>
                </div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/raed-siddiquie-11714a301/">
                <div><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    <h2>Linkedin</h2>
                </div>
            </a>
            <a target="_blank" href="">
                <div><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <h2>Mail</h2>
                </div>
            </a>
        </div>
        <hr/>
        <p>Copyright@My-Portfolio</p>
    </footer>
    </>
  )
}

export default Footer

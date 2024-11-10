import React from 'react'
import Style from "./project.module.css"
import Image from "next/image"

function Projects() {
  return (
    <section className={Style.section} id='projects'>
      <h1>PROJECTS</h1>
      <div className={Style.projects}>
        <div className={` ${Style.card} ' ${Style.card}`}>
          <div className={` ${Style.imagecard} ${Style.imagecard}`}>
            <Image src="/Images/cal.jpg.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://calculator-js-lac.vercel.app/" target="_blank">
            <div className={Style.cardtext}>
              <h1>Calculator</h1>
              <p>A simple calculator made with html,css and javascript</p>
              <div><span>Html</span><span>Css</span><span>Ts</span></div>
              <p >*Click to view code*</p>
            </div></a>
        </div>

        <div className={` ${Style.card} ' ${Style.card}`}>
          <div className={` ${Style.imagecard} ${Style.imagecard}`}>
            <Image src="/Images/smash.jpg.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://smash-it-seven.vercel.app/" target="_blank">
            <div className={Style.cardtext}>
              <h1>SmashIT</h1>
              <p>A fun Insect smashing game designed with html,css and javascript</p>
              <div><span>Html</span><span>Css</span><span>Js</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

        <div className={`' card w-[315px] h-[200px] bg-[#121212] border-solid border-[#04ffc3] border-r-[1px] border-l-[1px] relative flex items-center justify-center overflow-hidden gap-[30px] shadow-[#04ffc3] shadow-[2px_0px_3px_0px] ' ${Style.card}`}>
          <div className={` ${Style.imagecard} ${Style.imagecard}`}>
            <Image src="/Images/hangman.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://hang-man-pi-nine.vercel.app/" target="_blank">
            <div className={Style.cardtext}>
              <h1>Hangman</h1>
              <p>An interactive popular Hangman game design using pure Css and Javascript</p>
              <div><span>Html</span><span>Css</span><span>Js</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

        <div className={` ${Style.card} ' ${Style.card}`}>
          <div className={` ${Style.imagecard} ${Style.imagecard}`}>
            <Image src="/Images/rps.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://rock-paper-scissor-orpin-sigma.vercel.app/" target="_blank">
            <div className={Style.cardtext}>
              <h1>Rock-Paper-Scissor</h1>
              <p>An interactive Rock,Paper & Scissor Game enabled with Ai using html,css and javascript
              </p>
              <div><span>Html</span><span>Css</span><span>Js</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

        <div className={` ${Style.card} ' ${Style.card}`}>
          <div className={` ${Style.imagecard} ${Style.imagecard}`}>
            <Image src="/Images/portfolio.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://portfolio-raed-nextjs.vercel.app/" target="_blank">
            <div className={Style.cardtext}>
              <h1>Portfolio</h1>
              <p>Interactive and Simple Modern Web Development Portfolio designed with custom Css & Js</p>
              <div><span>React</span><span>Css</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

        <div className={` ${Style.card} ' ${Style.card}`}>
          <div className={` ${Style.imagecard} ${Style.imagecard}`}>
            <Image src="/Images/tiktak.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://tik-tac-toe-ashen.vercel.app/">
            <div className={Style.cardtext}>
              <h1>Tik Tak Toe</h1>
              <p>A simple tik tak game with html, css and javascript</p>
              <div><span>Html</span><span>Ts</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>
        <div className={` ${Style.card} ' ${Style.card}`}>
          <div className={` ${Style.imagecard} ${Style.imagecard}`}>
            <Image src="/Images/password.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://javascript-password-generator-phi.vercel.app/">
            <div className={Style.cardtext}>
              <h1>Tik Tak Toe</h1>
              <p>A simple tik tak game with html, css and javascript</p>
              <div><span>Html</span><span>Ts</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>
        <div className={` ${Style.card} ' ${Style.card}`}>
          <div className={` ${Style.imagecard} ${Style.imagecard}`}>
            <Image src="/Images/resume.png" layout='fill' alt=""></Image>
          </div>
          <a href="https://cvbuilder-phi.vercel.app/">
            <div className={Style.cardtext}>
              <h1>Resume Builder</h1>
              <p>An advanced and interactive Dynamic Resume Builder site for generation styled resume in few minutes</p>
              <div><span>Html</span><span>Css</span><span>Ts</span></div>
              <p >*Click to view code*</p>
            </div></a>
        </div>
        <div className={` ${Style.card} ' ${Style.card}`}>
          <div className={` ${Style.imagecard} ${Style.imagecard}`}>
            <Image src="/Images" layout='fill' alt=""></Image>
          </div>
          <a href="">
            <div className={Style.cardtext}>
              <h1>Project</h1>
              <p>......</p>
              <div><span>Html</span><span>Ts</span></div>
              <p>*Click to view code*</p>
            </div></a>
        </div>

      </div>

    </section>
  )
}

export default Projects

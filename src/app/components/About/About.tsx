'use client'
import React from 'react'
import Style from "./about.module.css"
import { useState } from 'react'

function About() {
  const [count, setCount] = useState(0)

  function incrementCount(num:number) {
    setCount(prev => prev = num)
  }


  return (
    <section className={Style.section} id='about'>
      <h1>ABOUT ME</h1>
      <div className={Style.about}>
        <div className={Style.about_wrapper}>
          <span className={` ${Style[count % 4 == 0 ? 'active':'']}`} onClick={() => incrementCount(0)}>INTRODUCTION</span>
          <span className={` ${Style[count % 4 == 1 ? 'active':'']}`} onClick={() => incrementCount(1)}>EDUCATION</span>
          <span className={` ${Style[count % 4 == 2 ? 'active':'']}`} onClick={() => incrementCount(2)}>SKILLS</span>
          <span className={` ${Style[count % 4 == 3 ? 'active':'']}`} onClick={() => incrementCount(3)}>EXPERIENCE</span>
        </div>
        <div className={Style.text_container}>
          <div className={` ${Style.text_box} ${Style[count % 4 == 0 ? 'visible' : '']}`}>
            <p className='text-white text-[1.3rem] font-[inter] my-2 leading-10'>I&#39;m Raed Siddiquie, a passionate rising Web Developer seeking to get an opportunity where I can make the
              best of my potential and contribute to the organizations growth, while
              polishing my skills.I have strong base in Html, Css and Javascript and currently learning latest web technologies</p>
          </div>
          <div className={` ${Style.text_box} ${Style[count % 4 == 1 ? 'visible' : '']}`}>
            <div className='mb-4'>
              <h3 className='text-white text-[1rem] font-[inter] font-bold'>Bachelor of Science in Computer Science</h3>
              <p className='text-white text-[1rem] font-[inter]  leading-10'>University Of Karachi - Ubit</p>
              <p className='text-white text-[0.8rem] text-bold font-[inter] '>2024 - 2028</p>
            </div>
            <div className='mb-4'>
              <h3 className='text-white text-[1rem] font-[inter] font-bold'>Intermediate In Engineering</h3>
              <p className='text-white text-[1rem] font-[inter]  leading-10'>Gov. College For Men</p>
              <p className='text-white text-[0.8rem] text-bold font-[inter] '>2021 - 2023</p>
            </div>
            <div className='mb-4'>
              <h3 className='text-white text-[1rem] font-[inter] font-bold'>Matric In Computer Science</h3>
              <p className='text-white text-[1rem] font-[inter]  leading-10'>Profectus International School</p>
              <p className='text-white text-[0.8rem] text-bold font-[inter] '>2021</p>
            </div>
          </div> 
          <div className={` ${Style.text_box} ${Style[count % 4 == 2 ? 'visible' : '']}`}>

            <div className='flex items-center justify-center flex-col w-[70%] my-2'>
              <p className='text-white text-[1.4rem] euro my-2 leading-10'>Graphic Designing</p>

              <div className="w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#04ffc3] h-2.5 rounded-full w-[85%]"></div>
              </div>
            </div>
            <div className='flex items-center justify-center flex-col w-[70%] my-2'>
              <p className='text-white text-[1.4rem] euro my-2 leading-10'>Web Development</p>

              <div className="w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#04ffc3] h-2.5 rounded-full w-[65%]"></div>
              </div>
            </div>
            <div className='flex items-center justify-center flex-col w-[70%] my-2'>
              <p className='text-white text-[1.4rem] euro my-2 leading-10'>UI/UX Designing</p>

              <div className="w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#04ffc3] h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>

          </div>
          <div className={` ${Style.text_box} ${Style[count % 4 == 3 ? 'visible' : '']}`}>

            <p className='text-white text-[1.3rem] font-[inter] my-2 leading-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia mollitia eum, necessitatibus cumque quisquam animi explicabo consectetur similique laboriosam iure accusantium consequatur nihil facere quis repudiandae quidem culpa facilis voluptatum?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

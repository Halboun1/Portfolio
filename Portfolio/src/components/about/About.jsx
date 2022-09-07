import React from 'react'
import './about.css'
import ME from '../../assets/me3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 3 Years</small>
            </article>

            
          </div>
          <p>
            Full Stack developer with passion for developing scalable web
            application, as a fresh graduate with very good experience in css
            and javascript, i am ready to jump at any opportunity to continure
            growing my skillset in the JS field,
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
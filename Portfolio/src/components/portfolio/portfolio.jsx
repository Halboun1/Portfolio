import React from 'react'
import './portfolio.css'
import IMG from '../../assets/under-construction.jpg'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="contaienr portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Halboun1/Handy-App" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://.com" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Halboun1/Handy-App" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://.com" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Halboun1/Handy-App" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://.com" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Halboun1/Handy-App" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
            <a href="https://.com" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio
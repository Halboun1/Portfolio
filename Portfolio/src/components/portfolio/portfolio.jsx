import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5></h5>
      <h2></h2>
      <div className="contaienr portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">

          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Halboun1/Handy-App" className='btn'>Github</a>
          <a href="https://.com" className='btn btn-primary'>Live Demo</a>
        </article>
      </div>

    </section>
  )
}

export default Portfolio
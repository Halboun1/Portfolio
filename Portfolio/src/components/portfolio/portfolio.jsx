import React from 'react'
import './portfolio.css'
import IMG from '../../assets/under-construction.jpg'




const data = [
  {
    id: 1,
    image: IMG,
    title: 'Under Construction',
    github: 'https://github.com/Halboun1',
    demo: 'https://www.google.com/search?q=under+construction+image&rlz=1C1CHBF_enCA989CA989&sxsrf=ALiCzsbfwkRCEqhYx5yycEJXWZpfHvDTYw:1663013079766&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjUtP2-hpD6AhVAAjQIHZ4pDUIQ_AUoAXoECAEQAw&biw=1920&bih=872&dpr=1#imgrc=p2U4hOqVDKR40M'
  },

  {
    id: 2,
    image: IMG,
    title: 'Under Construction',
    github: 'https://github.com/Halboun1/Reading-Big-Data-Files',
    demo: 'https://www.google.com/search?q=under+construction+image&rlz=1C1CHBF_enCA989CA989&sxsrf=ALiCzsbfwkRCEqhYx5yycEJXWZpfHvDTYw:1663013079766&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjUtP2-hpD6AhVAAjQIHZ4pDUIQ_AUoAXoECAEQAw&biw=1920&bih=872&dpr=1#imgrc=p2U4hOqVDKR40M'
  },

  {
    id: 3,
    image: IMG,
    title: 'Under Construction',
    github: 'https://github.com/Halboun1',
    demo: 'https://www.google.com/search?q=under+construction+image&rlz=1C1CHBF_enCA989CA989&sxsrf=ALiCzsbfwkRCEqhYx5yycEJXWZpfHvDTYw:1663013079766&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjUtP2-hpD6AhVAAjQIHZ4pDUIQ_AUoAXoECAEQAw&biw=1920&bih=872&dpr=1#imgrc=p2U4hOqVDKR40M'
  },

  {
    id: 4,
    image: IMG,
    title: 'Under Construction',
    github: 'https://github.com/Halboun1',
    demo: 'https://www.google.com/search?q=under+construction+image&rlz=1C1CHBF_enCA989CA989&sxsrf=ALiCzsbfwkRCEqhYx5yycEJXWZpfHvDTYw:1663013079766&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjUtP2-hpD6AhVAAjQIHZ4pDUIQ_AUoAXoECAEQAw&biw=1920&bih=872&dpr=1#imgrc=p2U4hOqVDKR40M'
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="contaienr portfolio__container">
       {
        data.map(({id, image, title,github,demo}) => {
          return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
                  <a href={demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
                </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio
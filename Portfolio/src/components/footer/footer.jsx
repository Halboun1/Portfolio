import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>EGATOR</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mohamed.halbouni"><FiFacebook/></a>
        <a href="https://twitter.com/home"><FiTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer
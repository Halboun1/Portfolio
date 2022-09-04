import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mohamed-halbouni-022419236/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Halboun1?tab=repositories" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
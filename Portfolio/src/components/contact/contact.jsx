import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xcpu0q', 'template_oqgfqkj', form.current, 'drSZISHDmO-t5TqTE')
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input typeof="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> 
      </div>
    </section>
  )
}

export default Contact
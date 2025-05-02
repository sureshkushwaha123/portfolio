import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='profile_img' src={profile_img} alt="" />
        <h1> <span>I'm Suresh Kushwaha,</span> a Full-Stack Developer.</h1>
        <p>I am a full-stack developer based in India, passionate about creating real-world projects. 
        I am always open to new opportunities and collaboration, so let's build something exciting together.
        </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect wiht me</AnchorLink></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/18FXio7zuzyDyPNYOIxmw_hOqC0ytX-sH/view?usp=drive_link">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero

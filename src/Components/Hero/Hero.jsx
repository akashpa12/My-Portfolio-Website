import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile from '../../assets/portfolio.jpeg'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="" />
        <h1><span>I'm AKASH P.A,</span> FullStack Developer Based in India.</h1>
        <p>I’m Akash P.A, a full-stack web developer passionate about creating efficient and user-friendly applications. I work with the MERN stack and enjoy solving real-world problems through technology.</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href="/ATS Resume Template3.pdf" download="ATS Resume Template3.pdf">My resume</a></div>
        </div>

    </div>
  )
}

export default Hero
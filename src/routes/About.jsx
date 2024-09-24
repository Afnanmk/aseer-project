import React from 'react'
import Header from '../components/Header'
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AboutHero from '../components/AboutHero'
import AboutRediscover from '../components/AboutRediscover';
import Travel from '../components/Travel';
import FooterSection from '../components/FooterSection';

const About = () => {
  return (
    <>
        <AboutHero/>
        <AboutRediscover/>
        <Travel/>
        <FooterSection/>
    </>
  )
}

export default About
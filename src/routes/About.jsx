import React from 'react'
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
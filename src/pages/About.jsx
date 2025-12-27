import React from 'react'
import CompanyStory from '../components/about/CompanyStory'
import VisionMission from '../components/about/VisionMission'
import Infrastructure from '../components/about/Infrastructure'
import CertificationsQuality from '../components/about/CertificationsQuality'
import AboutHeroSection from '../components/about/AboutHeroSection'

function About() {
  return (
    <div>
      <AboutHeroSection/>
      <CompanyStory/>
      <VisionMission/>
      <Infrastructure/>
      <CertificationsQuality/>
    </div>
  )
}

export default About

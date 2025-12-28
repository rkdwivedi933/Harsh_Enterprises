import React from 'react'
import { Helmet } from 'react-helmet'
import HipsDetails from '../components/hips/HipsDetails'
import HipsHero from '../components/hips/HipsHero'

function HipsRoll() {
  return (
    <>
      <Helmet>
        <title>HIPS Roll Manufacturer in India | Harsh Enterprises</title>
        <meta
          name="description"
          content="Harsh Enterprises is a leading HIPS roll manufacturer in India, offering durable, high-quality HIPS plastic rolls for seedling trays and agricultural applications."
        />
        <meta
          name="keywords"
          content="HIPS roll manufacturer, HIPS plastic roll India, HIPS sheet for seedling trays, HIPS roll supplier"
        />
        <link
          rel="canonical"
          href="https://www.harshenterprises.com/hips-roll"
        />
      </Helmet>

      <div>
        <HipsHero />
        <HipsDetails />
      </div>
    </>
  )
}

export default HipsRoll

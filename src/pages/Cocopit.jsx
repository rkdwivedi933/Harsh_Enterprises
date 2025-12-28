import React from 'react'
import { Helmet } from 'react-helmet'
import CocopitHero from '../components/cocopit/CocopitHero'
import CocopitDetails from '../components/cocopit/CocopitDetails'

function Cocopit() {
  return (
    <>
      {/* SEO – Cocopeat Page */}
      <Helmet>
        <title>Cocopeat Manufacturer in India | Coco Peat Blocks & Grow Bags</title>
        <meta
          name="description"
          content="Harsh Enterprises is a trusted cocopeat manufacturer in India supplying high-quality coco peat blocks, briquettes and grow bags for agriculture, nurseries and hydroponics."
        />
        <meta
          name="keywords"
          content="cocopeat manufacturer India, coco peat supplier, cocopeat blocks, coco peat grow bags"
        />
        <link
          rel="canonical"
          href="https://www.harshenterprises.com/cocopeat"
        />
      </Helmet>

      <div>
        <CocopitHero />
        <CocopitDetails />
      </div>
    </>
  )
}

export default Cocopit

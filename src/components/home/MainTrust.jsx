import React from 'react'

import {motion} from "framer-motion"
import {MessageSquareQuote} from "lucide-react"
import TrustPage from '../layout/TrustPage'

function MainTrust() {
  return (
    <div className=' pt-20 '>
        <div className="text-center mb-14">
          <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-20 h-1 mx-auto mb-5 rounded-full bg-linear-to-br from-white via-green-50 to-emerald-100"
                   
                  />
         
          <h2
            className="heading-xl text-gray-900 mb-4"
            
          >
             Our{' '}
            <span className='text-green-600'> Testimonials</span>
          </h2>
          <p className="paragraph text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our amazing community of dancers.
          </p>
        </div>
        <div>
            <TrustPage/>
        </div>
    </div>
  )
}

export default MainTrust

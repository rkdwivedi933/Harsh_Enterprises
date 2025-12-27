import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, BookOpen, Receipt } from "lucide-react";
import AnimationButton from "../layout/AnimationButton";

export default function MapSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-xl text-center text-gray-900 mb-4"
        >
          Our <span className="text-green-600">Location</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="paragraph text-center text-gray-600 max-w-2xl mx-auto mb-12 md:mb-16"
        >
          Visit our manufacturing facility and experience our commitment to
          quality, innovation, and sustainable agricultural solutions.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative w-full h-100 md:h-125 rounded-2xl overflow-hidden shadow-lg">
              <motion.iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.876203876308!2d80.8362431!3d24.6033448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f51265bc163%3A0xa72291e5383ab3ed!2sHarsh%20Enterprises!5e0!3m2!1sen!2sin!4v1735050000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Harsh Enterprises Location Map"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Harsh Enterprises
            </h3>
            <p className="paragraph text-gray-600 mb-8">
              Manufacturer of Seedling Tray, HIPS Roll, Cocopit
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="paragraph text-gray-800 font-medium mb-1">
                    Address
                  </p>
                  <p className="paragraph text-gray-600">
                    ward no. 10, near, Satna Rd, bamuraha, <br />
                    Satna, Madhya Pradesh 485005, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="paragraph text-gray-800 font-medium mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919893441392"
                    className="paragraph text-gray-600 hover:text-green-600 transition-colors"
                  >
                    +91 9893441392
                    <br />
                     +91 9752434983
                  </a>
                  
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Receipt className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="paragraph text-gray-800 font-medium mb-1">
                    GSTIN
                  </p>
                  <p
                    
                    className="paragraph text-gray-600 hover:text-green-600 transition-colors"
                  >
                    27BFKPM7217P1ZQ
                  </p>
                  
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="paragraph text-gray-800 font-medium mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@harshenterprises.com"
                    className="paragraph text-gray-600 hover:text-green-600 transition-colors"
                  >
                    info@harshenterprises.com
                  </a>
                </div>
              </div>
            </div>

            <motion.a
              href="https://maps.app.goo.gl/6DthhhY9AzQ4DYsu6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
            ><AnimationButton>
              
              Get Directions
            </AnimationButton>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

import React from "react";
import { Helmet } from "react-helmet";

import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import MapSection from "../components/contact/MapSection";

function Contact() {
  return (
    <>
      {/* SEO – Contact Page */}
      <Helmet>
        <title>Contact Harsh Enterprises | Seedling Tray Manufacturer</title>
        <meta
          name="description"
          content="Contact Harsh Enterprises for seedling trays, HIPS rolls and cocopeat manufacturing. Get bulk orders, pricing and support from our manufacturing unit."
        />
      </Helmet>

      <div>
        <ContactHero />
        <ContactForm />
        <MapSection />
      </div>
    </>
  );
}

export default Contact;

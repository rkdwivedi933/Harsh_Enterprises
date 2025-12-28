import React from "react";
import { Helmet } from "react-helmet";

import CompanyStory from "../components/about/CompanyStory";
import VisionMission from "../components/about/VisionMission";
import Infrastructure from "../components/about/Infrastructure";
import CertificationsQuality from "../components/about/CertificationsQuality";
import AboutHeroSection from "../components/about/AboutHeroSection";

function About() {
  return (
    <>
      {/* SEO – About Page */}
      <Helmet>
        <title>About Harsh Enterprises | Manufacturing Company in India</title>
        <meta
          name="description"
          content="Learn about Harsh Enterprises, a trusted manufacturing company in India specializing in seedling trays, HIPS rolls and cocopeat with modern infrastructure."
        />
      </Helmet>

      <div>
        <AboutHeroSection />
        <CompanyStory />
        <VisionMission />
        <Infrastructure />
        <CertificationsQuality />
      </div>
    </>
  );
}

export default About;

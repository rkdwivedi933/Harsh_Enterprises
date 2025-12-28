import React from "react";
import { Helmet } from "react-helmet";

import SeedlingDetails from "../components/seedlings/SeedlingDetails";
import SeedlingHeroSection from "../components/seedlings/SeedlingHeroSection";

function SeedlingTray() {
  return (
    <>
      {/* SEO – Seedling Tray Page */}
      <Helmet>
        <title>
          Seedling Tray Manufacturer in India | 70, 104, 126, 150, 160, 209 Cavity Trays
        </title>
        <meta
          name="description"
          content="Harsh Enterprises is a leading seedling tray manufacturer in India offering 70, 104, 126,150,160,209 cavity nursery trays with durable plastic and bulk supply options."
        />
      </Helmet>

      <div>
        <SeedlingHeroSection />
        <SeedlingDetails />
      </div>
    </>
  );
}

export default SeedlingTray;

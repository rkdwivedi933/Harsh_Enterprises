import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import ProductCategories from "../components/home/ProductCategories";
import ManufacturingProcess from "../components/home/ManufacturingProcess";
import WhyChooseUs from "../components/home/WhyChooseUs";

import CTASection from "../components/home/CTASection";
import MainTrust from "../components/home/MainTrust";
import ProductGrid from "../components/product/ProductGrid";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
 {/* SEO – Home Page */}
      <Helmet>
        <title>Seedling Tray Manufacturer in India | Harsh Enterprises</title>
        <meta
          name="description"
          content="Harsh Enterprises is a trusted manufacturer of seedling trays, HIPS rolls and cocopeat in India. Premium quality products for agriculture and nursery use."
        />
      </Helmet>
    <div>
      <HeroSection />
      <AboutPreview />
      <ProductCategories />
      <ProductGrid/>
      <ManufacturingProcess />
      <WhyChooseUs />
      <MainTrust/>
      
      <CTASection />
    </div>
    </>
  );
}

export default Home;

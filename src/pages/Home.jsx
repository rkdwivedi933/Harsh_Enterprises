import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import ProductCategories from "../components/home/ProductCategories";
import ManufacturingProcess from "../components/home/ManufacturingProcess";
import WhyChooseUs from "../components/home/WhyChooseUs";

import CTASection from "../components/home/CTASection";
import MainTrust from "../components/home/MainTrust";
import ProductGrid from "../components/product/ProductGrid";

function Home() {
  return (
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
  );
}

export default Home;

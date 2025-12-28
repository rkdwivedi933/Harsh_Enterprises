import React from "react";
import { Helmet } from "react-helmet";

import ProductHero from "../components/product/ProductHero";
import ProductGrid from "../components/product/ProductGrid";
import ProductDetails from "../components/product/ProductDetails";
import CustomOrdersSection from "../components/product/CustomOrdersSection";

function Products() {
  return (
    <>
      {/* SEO – Products Page */}
      <Helmet>
        <title>
          Seedling Trays, HIPS Rolls & Cocopeat Manufacturer | Harsh Enterprises
        </title>
        <meta
          name="description"
          content="Harsh Enterprises is a trusted manufacturer of seedling trays, HIPS rolls and cocopeat in India. Explore our full range of agriculture and nursery products."
        />
      </Helmet>

      <div>
        <ProductHero />
        <ProductGrid />
        <ProductDetails />
        <CustomOrdersSection />
      </div>
    </>
  );
}

export default Products;

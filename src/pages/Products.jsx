import React from 'react'
import ProductHero from '../components/product/ProductHero'
import ProductGrid from '../components/product/ProductGrid'
import ProductDetails from '../components/product/ProductDetails'
import CustomOrdersSection from '../components/product/CustomOrdersSection'

function Products() {
  return (
    <div>
      <ProductHero/>
      <ProductGrid/>
      <ProductDetails/>
      <CustomOrdersSection/>
    </div>
  )
}

export default Products

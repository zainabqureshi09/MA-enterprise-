import React from 'react'
import Products from './Components/Products'
import Insights from './Components/Insights'
import Hero from './Components/Hero'
import IndustriesPage from './Components/Industries'
import CaseStudiesPage from './Components/CaseStudy'

const products = () => {
  return (
    <div>
      <Hero/>
      <IndustriesPage/>
      <CaseStudiesPage/>
      <Products />
      <Insights/>
    </div>
  )
}

export default products

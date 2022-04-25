import React from "react"
import Features from "../components/Features/Features"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"
import Team from "../components/Team/Team"

const Index = () => {
  return (
    <Layout>
      <div class="bg-info">
      <Hero/>
      </div>
      <Features/>
      <div class="bg-danger">
      <Team/>
      </div>
    </Layout>
    
  )
}

export default Index

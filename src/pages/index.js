import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Mike Robinson's awful thoughts</h1>
    <p>In the future you will be full o the things I annoy friends and coworkers with</p>
  </Layout>
)

export default IndexPage

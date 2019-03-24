import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Mike Robinsons awful thoughts</h1>
    <p>In the future you will be full o the things I annoy friends and coworkers with</p>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Dankeschön!" />
    <div id="landingpage">
      <h1>Dankeschön!</h1>
      <p>Wir melden uns bald.</p>
    </div>
  </Layout>
)

export default IndexPage

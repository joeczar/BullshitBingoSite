import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import EmailSubmission from "../components/emailSubmission.js"
import SEO from "../components/seo"

import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="landingpage">
      <h1>Bullshit Bingo</h1>
      <h2>der Podcast</h2>
      <EmailSubmission />
    </div>
  </Layout>
)

export default IndexPage

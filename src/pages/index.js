import React from "react"

import Layout from "../components/layout"
import EmailSubmission from "../components/emailSubmission.js"
import SEO from "../components/seo"
import Logo from "../static/bullshit-bingo-podcast-logo.jpg"

import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="landingpage">
      <img className="shadow" id="logo" src={Logo} alt="Bullshit Bingo Logo" />
      <div className="text-box shadow">
      <h1>Bullshit Bingo</h1>
      <h2>der Podcast</h2>
      <p>
      Wir sprechen über Dinge, die du nicht mehr hören kannst. Jeder von uns hat seine eigenen Sätze aus der Hölle, die verletzten, wütend machen oder einfach nur nerven. Im Talk mit den unterschiedlichsten Gesprächspartner*innen finden wir heraus welche es sind, wie man damit umgehen oder es besser machen kann.


      </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

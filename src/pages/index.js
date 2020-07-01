import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../static/bullshit-bingo-podcast-logo.jpg"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div id="spotifyPlayer">
      <iframe
        src="https://open.spotify.com/embed-podcast/show/2hsMjrFOaPRMYFsSF3AKYK"
        width="100%"
        height="232"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
    <div className="text-box shadow">
      <div className="txtWrapper">
        <h1>Bullshit Bingo</h1>
        <h2>der Podcast</h2>
        <p>
          Wir sprechen über Dinge, die du nicht mehr hören kannst. Jeder von uns
          hat seine eigenen Sätze aus der Hölle, die verletzten, wütend machen
          oder einfach nur nerven. Im Talk mit den unterschiedlichsten
          Gesprächspartner*innen finden wir heraus welche es sind, wie man damit
          umgehen oder es besser machen kann.
        </p>
      </div>
      <img className="" id="logo" src={Logo} alt="Bullshit Bingo Logo" />
    </div>
  </Layout>
)

export default IndexPage

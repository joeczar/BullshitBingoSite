import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./impressum.css"

const ImpressumPage = () => (
  <Layout>
    <SEO title="Impressum" />

    <div id="impressumBody">
      <div className="text-box">
        <h1>Impressum</h1>
        <p>This page is required to meet German legal requirements.</p>

        <p>
          <em>
            Please note that we are not endorsing, nor are we affiliated with,
            any of the platforms mentioned on this website. We are simply
            providing these links for information purposes only.
          </em>
        </p>

        <p>
          https://bullshitbingo-podcast.com ist ein nicht-kommerzieller
          Internetauftritt.
        </p>

        <p>Inhaber des Internetauftritts:</p>

        <p>
          Garry Czarnecki
          <br />
          Für Bullshit Bingo der Podcast
          <br />
          Prenzlauer Promenade 147
          <br />
          13189 Berlin
        </p>

        <p>E-Mail: joe (at) joeczar (dot) com </p>

        <p>
          Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Garry Czarnecki
        </p>

        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber/-innen verantwortlich.
        </p>
      </div>
    </div>
  </Layout>
)

export default ImpressumPage

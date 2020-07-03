import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header
    className="shadow"
    style={{
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px`,
      }}
    >
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

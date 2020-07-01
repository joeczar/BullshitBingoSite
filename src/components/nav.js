import React from 'react';
import Link from 'gatsby-link';
import { FaInstagram, FaSpotify } from 'react-icons/fa';
import "./nav.css"

// import logo from '../img/logo.svg';

const Nav = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <h1 className="logo">
          <span id="BS">Bullshit</span> <span id="Bingo">Bingo</span>
        </h1>
      </Link>
    </div>

    <div className="navbar-start">
      {/* <Link className="navbar-link" to="/about">
        About
      </Link>
      <Link className="navbar-link" to="/podcast">
        Podcast
      </Link>
      <Link className="navbar-link" to="/contact">
        Contact
      </Link> */}
      <div id="social">
        <a
          id="spotify"
          className="navbar-link"
          href="https://open.spotify.com/show/2hsMjrFOaPRMYFsSF3AKYK?si=g1POoraqT_me7O1HYXlCCA"
        >
  
          <FaSpotify />
        </a>
        <a
          id="insta"
          className="navbar-link"
          href="https://www.instagram.com/bullshitbingo_podcast/"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  </nav>
)

export default Nav;

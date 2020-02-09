import React from 'react'

import './header.scss'

import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-content">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

export default Header

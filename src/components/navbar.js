import React from 'react'
import { Link } from 'gatsby'
import BioLinks from './bio-links'

const NavBar = () => {
  const nav = [
    {
      url: '/',
      title: 'Home'
    },
    {
      title: 'About',
      child: <BioLinks />
    },
    {
      url: '/events',
      title: 'Events'
    },
    {
      url: '/contact',
      title: 'Contact'
    }
  ]

  return (
    <div className="navbar">
      <ul className="navbar-nav">
        {nav.map(navItem =>
          navItem.url ? (
            <li className="nav-item" key={navItem.url}>
              <Link to={navItem.url}>
                <div className="nav-link">{navItem.title}</div>
              </Link>
            </li>
          ) : (
            <li className="nav-item nav-link">
              {navItem.title}
              <div className="collapse">{navItem.child}</div>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default NavBar

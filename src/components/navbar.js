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
      url: '/about',
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
        {nav.map(navItem => (
          <li className="nav-item" key={navItem.url}>
            <Link className="nav-link" to={navItem.url}>
              {navItem.title}
            </Link>
            <div className="collapse">{navItem.child}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar

import React from 'react'

const NavBar = () => {
  const nav = [
    {
      url: '/',
      title: 'Home'
    },
    {
      url: '/about',
      title: 'About'
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
            <a className="nav-link" href={navItem.url}>
              {navItem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar

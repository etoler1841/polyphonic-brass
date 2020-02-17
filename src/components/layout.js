import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Image from 'gatsby-image'
import Header from './header'
import NavBar from './navbar'
import '../css/style.scss'

import themes from '../css/themes.json'

const Layout = ({ children, fluidHeroData }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (typeof window !== 'undefined' && !window.themeIndex) applyRandomTheme()

  return (
    <>
      <div className="content-wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <NavBar />
        <div className="content">
          {fluidHeroData && (
            <Image className="hero-img" fluid={fluidHeroData} />
          )}
          <main>{children}</main>
        </div>
      </div>
      <footer className="footer">
        <p>
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a href="mailto:polyphonicbrass@gmail.com">Polyphonic Brass</a>
        </p>
      </footer>
    </>
  )
}

const applyRandomTheme = () => {
  if (typeof window === 'undefined') return
  const index = Math.floor(Math.random() * themes.length)
  window.themeIndex = index
  const theme = themes[index]

  const html = document.querySelector('html')
  html.style.setProperty('--primary-color', theme.primaryColor)
  html.style.setProperty('--primary-color-dark', theme.primaryColorDark)
  html.style.setProperty('--primary-color-darker', theme.primaryColorDarker)
  html.style.setProperty('--primary-color-darkest', theme.primaryColorDarkest)
  html.style.setProperty('--primary-color-light', theme.primaryColorLight)
  html.style.setProperty('--primary-color-lighter', theme.primaryColorLighter)
  html.style.setProperty('--primary-color-lightest', theme.primaryColorLightest)
  html.style.setProperty('--accent-color', theme.accentColor)
  html.style.setProperty('--accent-color-dark', theme.accentColorDark)
  html.style.setProperty('--nav-text-color', theme.navTextColor)
  html.style.setProperty('--body-text-color', theme.bodyTextColor)
  setTimeout(() => html.style.setProperty('--transition-time', '0.25s'), 500)
}

export default Layout

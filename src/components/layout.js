import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Image from 'gatsby-image'
import Header from './header'
import NavBar from './navbar'
import '../css/style.scss'

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

  return (
    <>
      <div style={{ minHeight: '100vh', marginBottom: -50 }}>
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

export default Layout

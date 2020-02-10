/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import NavBar from './navbar'
import '../css/style.scss'

const Layout = ({ children }) => {
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

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

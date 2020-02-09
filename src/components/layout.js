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
import './layout.css'

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
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <footer style={{ marginLeft: 50 }}>
        Copyright &copy; {new Date().getFullYear()}{' '}
        <a href="mailto:polyphonicbrass@gmail.com">Polyphonic Brass</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

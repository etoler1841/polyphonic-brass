import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Image from 'gatsby-image'

/**
 * These are placeholder events. This will ultimately read
 * from Google's Calendar API.
 */
import events from '../content/events'

import Events from '../components/events'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero-main.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <Layout fluidHeroData={file.childImageSharp.fluid}>
      <SEO
        title="Home"
        lang="en"
        description="The Polyphonic Brass are a brass quintet based in Pensacola, FL."
      />
      <Events events={events} />
      {/* Blog Posts */}
    </Layout>
  )
}

export default IndexPage

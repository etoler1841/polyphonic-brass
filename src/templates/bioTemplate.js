import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from 'gatsby-image'

const BioTemplate = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html }
  } = data

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        lang="en"
        description={`Learn more about ${frontmatter.title}, ${frontmatter.instrument} player for the Polyphonic Brass.`}
      />
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.instrument}</h2>
        <div style={{ maxWidth: 350 }}>
          <Image fluid={frontmatter.photo.childImageSharp.fluid} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        instrument
        photo {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BioTemplate

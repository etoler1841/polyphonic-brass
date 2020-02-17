import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

/**
 * These are placeholder events. This will ultimately read
 * from Google's Calendar API.
 */
import events from '../content/events'

import Events from '../components/events'
import NewsFeed from '../components/news-feed'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  const { file, articles } = useStaticQuery(graphql`
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
      articles: allMarkdownRemark(
        filter: { frontmatter: { tags: { eq: "article" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              date
            }
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
      <div className="two-column-display">
        <Events events={events} />
        <NewsFeed articles={articles.edges} />
      </div>
    </Layout>
  )
}

export default IndexPage

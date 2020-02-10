import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutUsPage = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { path: { eq: "/about" } }) {
        html
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <SEO
        title="About Us"
        lang="en"
        description="Meet the Polyphonic Brass."
      />
      {/* Hero image/slider */}
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }}
      />
    </Layout>
  )
}

export default AboutUsPage

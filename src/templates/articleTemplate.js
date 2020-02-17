import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ArticleTemplate = ({ data }) => {
  const {
    markdownRemark: { excerpt, frontmatter, html }
  } = data

  return (
    <Layout>
      <SEO title={frontmatter.title} lang="en" description={excerpt} />
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>
          Posted on {frontmatter.date} by {frontmatter.author}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt
      html
      frontmatter {
        title
        date
        author
      }
    }
  }
`

export default ArticleTemplate

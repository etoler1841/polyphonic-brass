import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const BioLinks = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/bio/" } } }
        sort: { fields: frontmatter___sortOrder, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)

  return (
    <div className="bio-links">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link className="bio-link" to={node.frontmatter.path}>
          {node.frontmatter.title}
        </Link>
      ))}
    </div>
  )
}

export default BioLinks
